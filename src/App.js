import './App.css';
import {useState} from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() { 
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({msg: message, type: type});
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (event)=>{
    let theme = event.target.id;
    if(theme==="light"){
      setmode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled.", "success");
    }
    else if(theme==="dark"){  
      setmode("dark");
      document.body.style.backgroundColor='#191919';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled.", "success");
    }
    else if(theme==='green'){
      setmode("green");
      document.body.style.backgroundColor='#198754';
      document.body.style.color='white';
      showAlert("Green mode has been enabled.", "success");
    }
    else{      
      setmode("grey");
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
      showAlert("Grey mode has been enabled.", "success");
    }
  }



  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Manip" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/"> */}
              <Alert alert={alert}/>
              <TextForm showAlert={showAlert}/>
            {/* </Route>
        </Switch> */}
              <About className="my-5" mode={mode}/>

      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
