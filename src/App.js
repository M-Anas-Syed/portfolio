import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
