import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctorp from "./pages/Doctorp";
import Contact from "./pages/Contact";

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
