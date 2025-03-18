import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from "./contexts/ThemeContext";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
