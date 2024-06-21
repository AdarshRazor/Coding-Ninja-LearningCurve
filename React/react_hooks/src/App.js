import './App.css';
import StateEventhandle from './components/state_eventhandle';
import StateEventhandleClass from './components/state_eventhandleclass';
import DarkMode from './components/useState/DarkMode';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      {/* <StateEventhandle heading="Text Analyzer Function" /> */}
      {/* <StateEventhandleClass heading="Text Analyzer class" /> */}
      <DarkMode/>
    </div>
  </>
  );
}

export default App;
