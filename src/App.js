import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (<>
  {/* <Navbar /> */}
  {/* { <Navbar  title="Navbar" about="About Navbar"/> */}
   <Navbar  title="Navbar" />
  <div className="container my-3">
  <TextForm heading="Enter Your Text Here to Analyse" />
  {/* <About /> */}
  </div> 

  </>);
}

export default App;
