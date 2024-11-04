import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

export const BookRegistration = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://mondayexam.onrender.com/api/v1/books', formData)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error registering book:', error);
      });
  };

  return (
    <Container className="mt-4">
      <h2>Registruoti Naują Knygą</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Pavadinimas</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Įveskite knygos pavadinimą"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Autorius</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Įveskite autoriaus vardą"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Kategorija</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Įveskite knygos kategoriją"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Kaina (€)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Įveskite knygos kainą"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCover">
          <Form.Label>Paveikslėlio nuoroda</Form.Label>
          <Form.Control
            type="url"
            name="cover"
            placeholder="Įveskite paveikslėlio nuorodą"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Registruoti knygą
        </Button>
      </Form>
    </Container>
  );
};
