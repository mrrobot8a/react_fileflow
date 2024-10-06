import { useEffect, useState } from "react";
import { useAuth } from "../../auth/provider/AuthProvider";
import InputField from "../../componentsGlobal/inputs/InputField";
import './dashboard.css';


export const DashboardScreen = () => {

    const Auth = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [listUser, setListUser] = useState<any[]>([]);
    const [identification, setIdentification] = useState('');

    // Estado para controlar si se está editando un usuario
    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState<any | null>(null);

    // Estado para controlar si los campos han sido tocados
    const [touchedFields, setTouchedFields] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        identification: false
    });

    const handleBlur = (field: string) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            phone,
            identification
        };

        if (isEditing && editingUser) {
            // Actualizamos el usuario que se está editando
            const updatedList = listUser.map((u) =>
                u.identification === editingUser.identification ? user : u
            );

            setListUser(updatedList);
            
            localStorage.setItem('listUser', JSON.stringify(updatedList));
            setIsEditing(false);
            setEditingUser(null);
        } else {
            // Añadimos un nuevo usuario
            const updatedList = [...listUser, user];
            setListUser(updatedList);
            localStorage.setItem('listUser', JSON.stringify(updatedList));
        }

       

        // Limpiar los campos
        resetForm();
    }

    // Función para resetear el formulario
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setPhone('');
        setIdentification('');
        setTouchedFields({
            firstName: false,
            lastName: false,
            phone: false,
            identification: false
        });
    }

    // Cargar usuarios desde localStorage al montar el componente
    useEffect(() => {
        const storedUsers = localStorage.getItem('listUser');
        if (storedUsers) {
            setListUser(JSON.parse(storedUsers));
        }
    }, []); // Este efecto solo se ejecuta una vez al cargar el componente


    function validateText(text: string): string | undefined {
        const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if (!regex.test(text)) {
            return 'Invalid information';
        }
        if (text.length === 0) {
            return 'This field is required';
        }
        if (text.length < 3) {
            return 'This field must have at least 3 characters';
        }
    }

    function validatePhone(phone: string): string | undefined {
        const regex = /^[0-9]{5}$/;
        if (!regex.test(phone)) {
            return 'Invalid phone number';
        }
    }

    function validateIdentification(identification: string): string | undefined {
        const regex = /^[0-9]{5}$/;
        if (!regex.test(identification)) {
            return 'Invalid identification number';
        }
    }

    // Función para manejar la edición
    function handleEdit(user: any) {
        console.log('user Tbale', user)
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setPhone(user.phone);
        setIdentification(user.identification);
        setIsEditing(true);
        setEditingUser(user);
    }

    return (
        <>
            <p>Hello dashboard de {Auth.getUser()!.firstName || ""}</p>

            <form className="form_dashboard" action="" onSubmit={handleSubmit}>

                <InputField
                    error={validateIdentification(identification)}
                    type="number"
                    icon="person"
                    value={identification}
                    placeholder="Identification"
                    onChange={(e) => setIdentification(e.target.value)}
                    onBlur={() => handleBlur('identification')}
                    touched={touchedFields.identification}
                />
                <InputField
                    error={validateText(firstName)}
                    type="text"
                    icon="person"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => handleBlur('firstName')}
                    touched={touchedFields.firstName}
                />
                <InputField
                    error={validateText(lastName)}
                    type="text"
                    icon="person"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => handleBlur('lastName')}
                    touched={touchedFields.lastName}
                />
                <InputField
                    error={validatePhone(phone)}
                    type="tel"
                    icon="phone"
                    value={phone}
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    touched={touchedFields.phone}
                />
                <button type="submit">{isEditing ? 'Update' : 'Save'}</button>
            </form>

            <h3>Saved Users:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Identification</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.map((user, index) => (
                        <tr key={index}>
                            <td>{user.identification}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => console.log('Delete', user)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};
