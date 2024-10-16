import './addemployes.css';
import { NavbarCustom } from '../navbar/navbar_custom';
import { useState } from 'react';

const AddEmployes = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);

  // Función para manejar la selección de la imagen
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Guardar la imagen en el estado
      };
      reader.readAsDataURL(file); // Leer el archivo seleccionado
    }
  };

  return (
    <>
      <NavbarCustom></NavbarCustom>
      <div className="home">
        <br />
        <br />
        <h2>Añadir empleado</h2>
        <br />
        <div className="formulario">
          <div className="slide">
            <div className="item">
              <h3>Información personal</h3>
              <div className="campos">
                <aside>
                  <label htmlFor="profileImageUpload" className="upload-label">
                    {profileImage ? (
                      <img src={profileImage as string} alt="Perfil" className="imgperfil" width="90" height="90" />
                    ) : (
                      <svg className="imgperfil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90">
                        <path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                      </svg>
                    )}
                    <span>Subir imagen de perfil</span>
                  </label>
                  <input
                    id="profileImageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                </aside>
                <section className="formularios">
                  <div className="w30">
                    <label htmlFor="name">Nombres completos</label>
                    <input id="name" name="name" type="text" />
                  </div>
                  <div className="w30">
                    <label htmlFor="surname">Apellidos</label>
                    <input id="surname" name="surname" type="text" />
                  </div>
                  <div className="w30">
                    <label htmlFor="dob">Fecha de nacimiento</label>
                    <input id="dob" name="dob" type="date" />
                  </div>
                  <div className="w30">
                    <label htmlFor="city">Ciudad</label>
                    <input id="city" name="city" type="text" />
                  </div>
                  <div className="w30">
                    <label htmlFor="address">Dirección</label>
                    <input id="address" name="address" type="text" />
                  </div>
                  <br />
                  <div className="acciones">
                    <button type="submit">Guardar</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployes;
