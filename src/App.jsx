import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import SpeakersPage from "./components/pages/SpeakersPage";
import ProgramPage from "./components/pages/ProgramPage";
import VenuePage from "./components/pages/VenuePage";
import RegistrationPage from "./components/pages/RegistrationPage";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return <RouterApp />;
}

function RouterApp() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
