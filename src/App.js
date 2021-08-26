import './App.css';
import {useState} from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() { 
  const [darkMode, setDarkMode] = useState("dark");
  return (
    <>
      <Navbar title="Text Utils" mode={darkMode}/>
      <div className="container my-3">
      <TextForm/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
