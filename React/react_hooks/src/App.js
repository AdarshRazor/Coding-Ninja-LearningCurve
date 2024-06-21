import './App.css';
import StateEventhandle from './components/state_eventhandle';
import StateEventhandleClass from './components/state_eventhandleclass';
import DarkMode from './components/useState/DarkMode';
import Navbar from './components/Navbar';
import Effect from './components/useEffect/Effect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="container my-5">
      <Routes>
        <Route exact path="/text" element={<StateEventhandle heading="Text Analyzer Function" />} />
        <Route path="/" element={<DarkMode/>} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/class" element={<StateEventhandleClass heading="Text Analyzer class" />} />
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
