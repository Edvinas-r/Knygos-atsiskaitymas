import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import './BookList.css';

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get('https://mondayexam.onrender.com/api/v1/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  const toggleReserve = (id, reserved) => {
    axios
      .put(`https://mondayexam.onrender.com/api/v1/books/${id}`, { reserved: !reserved })
      .then(() => {
        fetchBooks();
      })
      .catch((error) => {
        console.error('Error updating book status:', error);
      });
  };

  const filteredBooks = category
    ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
    : books;

  return (
    <div className="container mt-2">
      <Row>
        {filteredBooks.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.cover} alt={`${book.title} cover`} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <span>Autorius:</span> {book.author} <br />
                  <span>Kategorija:</span> {book.category} <br />
                  <span>Kaina:</span> {book.price} €
                </Card.Text>
                <button className="btn btn-primary mt-auto" onClick={() => toggleReserve(book.id, book.reserved)}>
                  {book.reserved ? 'Grąžinti' : 'Išduoti skaitytojui'}
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
