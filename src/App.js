import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';


function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('darkMode');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    const body = document.body;
    body.style.backgroundColor = darkMode ? '#333' : '#f5f5f5';
    body.style.color = darkMode ? '#fff' : '#333';
  }, [darkMode]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value !== language ? 'de' : 'en');
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      {/* // < style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}> */}
      <Router>
        <Header
          language={language}
          onLanguageChange={handleLanguageChange}
          darkMode={darkMode}
          onDarkModeChange={handleDarkModeChange}
        />
        <MainLayout language={language} darkMode={darkMode} />
        <Footer language={language} darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;
