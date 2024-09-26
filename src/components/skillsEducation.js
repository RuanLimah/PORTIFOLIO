import React, { useState, useEffect } from 'react';
import './skillsEducation.css'; // Importando o CSS unificado
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import sassLogo from '../assets/saas.svg';
import jsLogo from '../assets/js.svg';
import reactLogo from '../assets/react.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import gitLogo from '../assets/git.svg';
import figmaLogo from '../assets/figma.svg';
import separador from '../assets/separatorBlack 1.png';
import node from '../assets/nodeJs.png';
import mySql from '../assets/mySql.svg';
import mongoDB from '../assets/mongoDB.png';
import ts from '../assets/ts.png';
import flagInglesa from '../assets/flagBritanica.svg';
import flagEspanica from '../assets/flagEspanica.svg';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import designIcon from '../assets/designer.png';
import developmentIcon from '../assets/development.png';
import maintenanceIcon from '../assets/maintenace.png';

// Configurar o PDF.js
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const certificates = Array.from({ length: 38 }, (_, index) => ({
  name: `Certificado ${index + 1}`,
  pdf: require(`../certificates/certificado${index + 1}.pdf`)
}));

function SkillsEducation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [thumbnailUrls, setThumbnailUrls] = useState([]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchThumbnails = async () => {
      const urls = await Promise.all(certificates.map(async (cert) => {
        const pdf = await getDocument(cert.pdf).promise;
        const page = await pdf.getPage(1); // Pega a primeira página
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Renderiza a página no canvas
        await page.render({ canvasContext: context, viewport }).promise;
        return canvas.toDataURL(); // Converte para URL de imagem
      }));
      setThumbnailUrls(urls);
    };

    fetchThumbnails();
  }, []);

  return (
    <div className="skills-education-section">
      {/* Seção de Educação */}
      <div className="education-section">
        <h2 className="section-title">EDUCAÇÃO</h2>
        <p className="description">
          Sou estudante de Engenharia de Software e busco sempre me especializar por meio de cursos extracurriculares.
        </p>
        <button className="explore-btn" onClick={toggleExpand}>
          {isExpanded ? 'VER MENOS' : 'EXPLORE'}  
        </button>
        {isExpanded && (
          <div className="certificates">
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <a key={index} href={cert.pdf} target="_blank" rel="noopener noreferrer">
                  <div className="certificate-item">
                    <img src={thumbnailUrls[index]} alt={`Thumbnail do ${cert.name}`} />
                    <p>{cert.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Separador visual */}
      <img src={separador} alt="Divider" className="divider" />

      {/* Seção de Serviços */}
      <h2 className="section-title">SERVIÇOS</h2>
      <div className="services-section">
      <div className="services-row">
        {/* Design */}
        <div className="service-item">
          <img src={designIcon} alt="Design Icon" className="service-design" />
          <h3 className="service-title">DESIGN</h3>
          <p className="service-description">
            Transforme suas ideias em realidade com um design personalizado que reflete a essência do seu projeto. 
            Estou aqui para ouvir suas necessidades e criar uma solução visual que se destaca.
          </p>
        </div>

        {/* Development */}
        <div className="service-item">
          <img src={developmentIcon} alt="Development Icon" className="service-icon" />
          <h3 className="service-title">DEVELOPMENT</h3>
          <p className="service-description">
            Desenvolva sua presença online com um site robusto e funcional. 
            Meu objetivo é construir plataformas que atendam às suas expectativas e ofereçam uma experiência fluida para os usuários.
          </p>
        </div>
      </div>

      {/* Maintenance (Centralizado abaixo dos dois) */}
      <div className="service-item centered">
        <img src={maintenanceIcon} alt="Maintenance Icon" className="service-icon" />
        <h3 className="service-title">MANUNTENÇÃO</h3>
        <p className="service-description">
          Posso gerenciar a manutenção do site conforme suas necessidades e sugestões, 
          além de oferecer suporte contínuo durante e após o processo de desenvolvimento.
        </p>
      </div>
       {/* Separador visual */}
       <img src={separador} alt="Divider" className="divider" />
    </div>

      {/* Seção de Skills */}
      <h2 id='section-skills' className="section-title">SKILLS</h2>

      {/* Skills que você está usando agora */}
      <h3 className='skills-using'>USANDO AGORA:</h3>
      <div className="skills-grid">
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <img src={cssLogo} alt="CSS" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <img src={sassLogo} alt="SASS" />
          <p>SASS</p>
        </div>
        <div className="skill-item">
          <img src={jsLogo} alt="JavaScript" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="skill-item">
          <img src={reactLogo} alt="React" />
          <p>REACT</p>
        </div>
        <div className="skill-item">
          <img src={node} alt="Node.js" />
          <p>NODEJS</p>
        </div>
        <div className="skill-item">
          <img src={mySql} alt="MySQL" />
          <p>MYSQL</p>
        </div>
        <div className="skill-item">
          <img src={gitLogo} alt="Git" />
          <p>GIT</p>
        </div>
        <div className="skill-item">
          <img src={bootstrapLogo} alt="Bootstrap" />
          <p>BOOTSTRAP</p>
        </div>
        <div className="skill-item">
          <img src={figmaLogo} alt="Figma" />
          <p>FIGMA</p>
        </div>
      </div>

      {/* Skills que você está aprendendo */}
      <h3 className='skills-Learning'>Learning:</h3>
      <div className="learning-grid">
        <div className="skill-item">
          <img src={ts} alt="TypeScript" />
          <p>TYPESCRIPT</p>
        </div>
        <div className="skill-item">
          <img src={mongoDB} alt="MongoDB" />
          <p>MONGODB</p>
        </div>
      </div>

      {/* Outras skills */}
      <h3 className='skills-others'>Outras Skills:</h3>
      <div className="others-grid">
        <div className="skill-item">
          <img src={flagInglesa} alt="Inglês" />
          <p>ENGLISH B1</p>
        </div>
        <div className="skill-item">
          <img src={flagEspanica} alt="Espanhol" />
          <p>ESPANHOL B1</p>
        </div>
      </div>

      {/* Seção de Portfólio */}
      <div>
        <h2 className="section-title">PORTFÓLIO</h2>
      </div>
    </div>
  );
}

export default SkillsEducation;
