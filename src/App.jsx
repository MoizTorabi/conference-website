import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return <RouterApp />;
}

function RouterApp() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
