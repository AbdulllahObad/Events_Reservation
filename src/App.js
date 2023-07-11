import React from 'react';
import EventsPage from './pages/EventsPage';
import Contact from './pages/Contact';
import Auth from './pages/Auth'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Details from './pages/Details';


export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element ={<EventsPage/>} />  
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/events/:eventId" element={<Details/>} />      
      </Routes>      
    </BrowserRouter>
    </div>
  );
}


