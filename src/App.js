import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
