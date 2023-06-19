
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
