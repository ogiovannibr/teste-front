import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Registro from './components/Register';
import LandingPage from './components/landing-page';
import Baralho from './components/baralhos';
import Carta from './components/cartas';
import Dashboard from './components/dashboard'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/baralhos" element={<Baralho />} />
          <Route path="/cartas/:deckId" element={<Carta />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const apiUrl = process.env.REACT_APP_API_URL + "/api/endpoint";

// Agora, quando você for fazer uma requisição para esse endpoint:
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


export default App;
