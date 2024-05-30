import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/pages/login';
import Chat from './components/pages/chat';
import Register from './components/pages/register';
import './App.css';
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Add a Home route (optional) */}
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
