import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Container } from 'react-bootstrap';

export const BookReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    review: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Ačiū, ${formData.name}, jūsų atsiliepimą gavome!`);
    setFormData({ name: '', title: '', review: '' });
  };
  return (
    <Container className="mt-4">
      <h2>Atsiliepimų forma</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Vardas</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Įveskite savo vardą"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Knygos pavadinimas</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Įveskite knygos pavadinimą"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formReview">
          <Form.Label>Atsiliepimas</Form.Label>
          <Form.Control
            as="textarea"
            rows={9}
            name="review"
            placeholder="Parašykite savo atsiliepimą"
            value={formData.review}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Siųsti atsiliepimą
        </Button>
      </Form>
    </Container>
  );
};
