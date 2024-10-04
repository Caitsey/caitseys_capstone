import Nav from './Components/Nav.js'
import Homepage from './Components/Homepage.js'
import Footer from './Components/Footer.js'
import './App.css';
import Bookingpage from './Components/Bookingpage.js';
import { Routes, Route } from 'react-router-dom';
import Section from './Components/Section.js';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Homepage />}></Route>
        <Route path="/booking" element={ <Bookingpage />}></Route>
        <Route path="/about" element={ <Section />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
