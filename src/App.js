
import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
