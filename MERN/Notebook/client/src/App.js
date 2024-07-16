import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import NoteState from './context/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
     <Navbar/>
     <Alert message="This is a test message"/>
     <NoteState>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
      </Routes>
      </NoteState>

    </>
  );
}

export default App;
