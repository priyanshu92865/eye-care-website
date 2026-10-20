import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";

import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Doctorp from "./pages/Doctorp.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/doctors" element={<Doctorp/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
