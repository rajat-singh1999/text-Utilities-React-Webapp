import './App.css';
import {useState} from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() { 
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({msg: message, type: type});
  }

  const toggleMode = ()=>{
    if(darkMode==="dark"){
      setDarkMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    else{
      setDarkMode("dark");
      document.body.style.backgroundColor='#191919';
      document.body.style.color='#0d6efd';
    }
  }


  return (
    <>
      <Navbar title="Text Format" mode={darkMode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Alert alert={alert}/>
      <TextForm/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
