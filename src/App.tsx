import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ReservationForm from './page/ReservationForm';



function App() {
  return (
    <Router basename="/littel-lemon">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation-form" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
