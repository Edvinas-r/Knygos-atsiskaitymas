import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BookList } from './knygu-registras/BookList';
import { BookRegistration } from './knygu-registras/BookRegistration';
import { BookReview } from './knygu-registras/BookReview';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './knygu-registras/NavigationBar';
import { Footer } from './knygu-registras/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    
    
      <NavigationBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/register" element={<BookRegistration />} />
        <Route path="/review" element={<BookReview />} />
      </Routes>
      <Footer />
    
  

    </>
  )
};

export default App


