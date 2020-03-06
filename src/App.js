
import React, { Component }  from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Social from './Social'; 
import About from './About.js'; 
import './App.css';
import StackGrid from "react-stack-grid";

class MyComponent extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <header><h1>React Portfolio by DN</h1></header>
        <h4>Web Developer Dilara Nagimova</h4>
        <Route exact path="/projects" component={Projects} />
        <Route path="/Social" component={Social} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/Social" className="item">Social</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;

