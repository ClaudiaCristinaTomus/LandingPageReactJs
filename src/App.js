
import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import About from './components/About/About';

function App() {
  return (
    <div>
       <Router>
        <Header/>
        <About/>
      </Router>
    </div>
  );
}

export default App;
