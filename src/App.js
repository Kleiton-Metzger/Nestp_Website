import React from "react";
import "./App.css";
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
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";
import Layout from "./components/Layout";

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
