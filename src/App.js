import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";

function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/user" element={<Modal/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
