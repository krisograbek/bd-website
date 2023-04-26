import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { language, onLanguageChange, darkMode, onDarkModeChange } = props;

  return (
    <header className={darkMode ? 'header dark-mode' : 'header'}>
      <nav>
        <ul>
          <li><Link to="/">{language === 'en' ? 'Home' : 'Startseite'}</Link></li>
          <li><Link to="/about">{language === 'en' ? 'About' : 'Über uns'}</Link></li>
          <li><Link to="/career">{language === 'en' ? 'Career' : 'Karriere'}</Link></li>
        </ul>
        <div className="switches">
          <div className="language-switch">
            <span>EN</span>
            <label className="switch">
              <input type="checkbox" checked={language === 'de'} value='de' onChange={onLanguageChange} />
              <span className="slider round"></span>
            </label>
            <span>DE</span>
          </div>
          <div className="dark-mode-switch">
            <span>Light</span>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={onDarkModeChange} />
              <span className="slider round"></span>
            </label>
            <span>Dark</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
