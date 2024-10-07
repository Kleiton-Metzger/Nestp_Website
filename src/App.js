import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Culture,
  Sport,
  Accommodation,
  Information,
  Contact,
  News,
  AboutUs,
  IPB,
  Agenda,
  ServicosSociais,
  CartaoResid,
} from "./components/Screens";

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cultura" element={<Culture />} />
            <Route path="/desporto" element={<Sport />} />
            <Route path="/alojamento" element={<Accommodation />} />
            <Route path="/informacoes" element={<Information />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/ipb" element={<IPB />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/servicos-sociais" element={<ServicosSociais />} />
            <Route path="/cartao-residencia" element={<CartaoResid />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
