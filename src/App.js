
import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel'
import data from "./components/data.json"


function App() {
  return (
    <div>
       <Router>
        <Header/>
        <About/>
        <Carousel/>
      </Router>
    </div>
  );
}

export default App;
