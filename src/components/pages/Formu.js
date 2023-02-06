import Button from "react-bootstrap/Button";
import {Form, handleSubmit, handleChange} from "react-bootstrap/Form";

const Formu = () => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="nameForm"
          type="text"
          placeholder="Escriba su Nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="emailForm"
          type="email"
          placeholder="Correo"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Comentario</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="emailDescription"
          type="text"
          placeholder="Comentario"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formu;
