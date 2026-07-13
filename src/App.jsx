import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mission from "./pages/Misson";
import StickyContact from "./components/StickyContact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/misson" element={<Mission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;
