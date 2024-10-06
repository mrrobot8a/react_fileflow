import { Modal, Button, Form } from 'react-bootstrap';

interface ImageModalProps {
  show: boolean;
  handleClose: () => void;
  image: string;
  name: string;
  onSave: () => void;
  age: string;
  setAge: (value: string) => void;
}

function ImageModal({ show, handleClose, image, name, onSave, age, setAge }: ImageModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <img src={image} alt={name} style={{ width: '100px', borderRadius: '10px' }} />
        </div>
        <Form>
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              value={age} // El valor del input es el estado age pasado desde el padre
              onChange={(e) => setAge(e.target.value)} // Actualiza el estado age en el componente padre
              placeholder="Enter your age"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onSave(); // Ejecuta la función onSave del componente padre
            handleClose(); // Cierra el modal
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
