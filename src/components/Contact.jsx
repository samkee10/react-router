import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function TextControlsExample() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();   
    setShowSuccessMessage(true);
  };

  return (
    <Form className='text-center' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className='d-flex align-items-center justify-content-center'>
        <Button type="submit" variant="danger">Enviar</Button>
      </div>
      {showSuccessMessage && (
        <div className="text-success mt-3">Mensaje enviado</div>
      )}
    </Form>
  );
}

export default TextControlsExample;