import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';



function App() {
  let [mode,setMode] = useState('light');
  let [alert,setAlert] = useState(null);

  const Showalert = ((message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  })

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      Showalert("Dark Mode has been enabled : 'Success' ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      Showalert("Light Mode has been enabled : 'Success' ");
    }
  }

  return (<>
  {/* <Navbar /> */}
  {/* { <Navbar  title="Navbar" about="About Navbar"/> */}
   <Navbar  title="Navbar" mode={mode}  togglemode={togglemode} />
   <Alert  alert={alert}/>
  <div className="container my-3">
  <TextForm heading="Enter Your Text Here to Analyse"   />
  {/* <About /> */}
  </div> 

  </>);
}

export default App;
