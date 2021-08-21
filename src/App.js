import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container my-3">
      <TextForm/>
      </div>
    </>
  );
}

export default App;
