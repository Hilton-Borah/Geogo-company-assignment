import logo from './logo.svg';
import './App.css';
import Allroutes from './Mainpages/Allroutes';
import Navbar from './componants/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleToogle=()=>{
    setIsOpen(false)
  }
  return (
    <div className="App">
      <Navbar toggleNavbar={toggleNavbar} isOpen={isOpen}/>
      <div onClick={handleToogle}>
     <Allroutes/>
     </div>
    </div>
  );
}

export default App;
