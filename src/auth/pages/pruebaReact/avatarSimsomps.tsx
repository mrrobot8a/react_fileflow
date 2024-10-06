import React, { useEffect, useState } from 'react';
import './avatarsimsomps.css.css';
import Carousel from 'react-bootstrap/Carousel';
import { EyeFill } from 'react-bootstrap-icons';
import ImageModal from '../../../componentsGlobal/modalcustom/modal';
import DataTable from '../../../componentsGlobal/tableCustom/table_custom'; // Importar el nuevo componente

export const AvatarSimsomsScreen = () => {
    const [listItems, setListItem] = useState<ICliente[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState({} as ICliente);
    const [age, setAge] = useState('');


    const listItemsV2 = [{
        "quote": "I'm sleeping in the bath tub.",
        "character": "Marge Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
        "characterDirection": "Right",

    }, {
        "quote": "I'm sleeping in the bath tub.",
        "character": "Marge Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
        "characterDirection": "Right",

    }, {
        "quote": "I'm sleeping in the bath tub.",
        "character": "Marge Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
        "characterDirection": "Right",

    },
    {
        "quote": "I'm sleeping in the bath tub.",
        "character": "Marge Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
        "characterDirection": "Right",

    }];

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes", {
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                console.log(data);
                setListItem(listItemsV2);
            } catch (error) {
                console.error(error);
            }
        };
       

        fetchData();

    }, []);

    interface ICliente {
        character: string;
        quote: string;
        image: string;
    }

    function openModala(itemClient: ICliente): void {
        setSelectedClient(itemClient);
        setShowModal(true);
    }

    function onSubmit(): void {
        console.log(age);

        const personaje = {
            character: selectedClient.character,
            quote: selectedClient.quote,
            image: selectedClient.image,
            age: age,
        };
        try {
            const result = fetch('https://testfrontend.co/v1/testsimpsons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(personaje),
            });
            console.log(result);
            setAge('');
        } catch (error) {
            console.log(error);
        }
    }

    // Definir las columnas para la tabla
    const columns = [
        { header: "No.", key: "index" }, // Renderiza el índice
        { header: "Name", key: "character" },
        { header: "Quote", key: "quote" },
        {
            header: "Detail",
            key: "detail",
            render: (data: any, row: ICliente) => (
                <button onClick={() => openModala(row)}>
                    <EyeFill />
                </button>
            ),
        },
    ];

    return (
        <>
            <div className="container">
                <div className="container__carrusel">
                    <Carousel indicators={false} slide={false} fade={true} interval={3000}>
                        {listItems.map((slide: ICliente, index) => (
                            <Carousel.Item key={index}>
                                <div className="box-image">
                                    <img
                                        className="d-block w-100"
                                        src={slide.image}
                                        alt={`${slide.character} image`}
                                    />
                                </div>
                                <div className="custom-carousel-caption">
                                    <h3>{slide.character}</h3>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="container__table">
                    <DataTable
                        columns={columns}
                        data={listItems.map((item, index) => ({ ...item, index:index }))} // Añadir índice al array de datos
                        onRowClick={(item) => openModala(item)} // Opcional: puedes manejar un clic en la fila
                    />
                </div>
            </div>

            {selectedClient && showModal ? (
                <ImageModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    image={selectedClient.image}
                    name={selectedClient.character}
                    onSave={() => onSubmit()}
                    age={age}
                    setAge={(value) => setAge(value)}
                />
            ) : null}
        </>
    );
};
