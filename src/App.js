import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container my-3">
      <TextForm/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
