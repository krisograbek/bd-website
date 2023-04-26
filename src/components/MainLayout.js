import React from 'react';
import './MainLayout.css';
import Career from './Career';
import About from './About';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


function MainLayout(props) {
  const { language, darkMode } = props;
  const className = darkMode ? 'dark-mode' : '';

  return (
    <main className={className}>
      <Routes>
        <Route exact path="/" element={<Home language={language} darkMode={darkMode} />} />
        <Route path="/about" element={<About language={language} darkMode={darkMode} />} />
        <Route path="/career" element={<Career language={language} darkMode={darkMode} />} />
      </Routes>
    </main>
  );
}


export default MainLayout;
