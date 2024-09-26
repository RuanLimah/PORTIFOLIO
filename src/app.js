import React from 'react';
import Home from './components/home';
import About from './components/about';
import SkillsEducation from './components/skillsEducation';
import Projects from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <SkillsEducation/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;