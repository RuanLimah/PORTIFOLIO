import React, { useState, useEffect } from 'react';
import './home.css';
import logo from '../assets/logo 1.png'; 
import email from '../assets/icon-email.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import rectangle from '../assets/Rectangle 67.svg';

function Home() {
  const nome = "Ruan Lima"; 
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);
  const [apagar, setApagar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!apagar && indice < nome.length) {
        setTexto(prev => prev + nome.charAt(indice));
        setIndice(indice + 1);
      } else if (apagar && indice > 0) {
        setTexto(prev => prev.slice(0, -1));
        setIndice(indice - 1);
      } else {
        setTimeout(() => {
          setApagar(!apagar);
        }, 1000);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [indice, apagar, nome]);

  return (
    <div className="home-container">
      <div className="home-left">
        <img src={logo} alt="Logo" className="home-logo" />
        <div className="home-text">
          <p className='home-welcome'>Olá, eu sou o</p>
          <h1>{texto || "\u00A0"}</h1>
          <p className="home-description">Software Developer</p>
          <div className="home-icons">
            <a href="mailto:ruanlimah@hotmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Email" className="icon" />
            </a>
            <a href="https://github.com/RuanLimah" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ruanlimah" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="home-right">
        <nav className="home-nav">
          <ul className="home-list">
            <li className="home-item">
              <a href="#sobre-mim">Sobre Mim</a>
            </li>
            <li className="home-item">
              <a href="https://drive.google.com/file/d/13r-h-Zmc8F8lro80SADVVA7iTQqcL_ke/view?usp=sharing" target="_blank" rel="noopener noreferrer">Currículo</a>
            </li>
            <li className="home-item">
              <a href="#section-skills">Skills</a>
            </li>
            <li className="home-item">
              <a href="#section-portfolio">Portfólio</a>
            </li>
            <li className="home-item contact">
              <a href="#contate-me">Contate-me</a>
            </li>
          </ul>
        </nav>
        <div className="home-right">
           <img src={rectangle} alt="Rectangle" className="rectangle" />
          <div className="photo-container">
             <img src={require('../assets/minha_foto1.png')} alt="Minha Foto" className="minha-foto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
