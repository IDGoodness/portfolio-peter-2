import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Certifications from "./Pages/Certifications";
import IndustrialExperience from "./Pages/IndustrialExperience";
import ResearchExperience from "./Pages/ResearchExperience";
import Awards from "./Pages/Awards";
import Volunteering from "./Pages/Volunteering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          }
        />

        <Route
          path="/industrial-experience"
          element={
            <Layout currentPageName="IndustrialExperience">
              <IndustrialExperience />
            </Layout>
          }
        />

        <Route
          path="/research-experience"
          element={
            <Layout currentPageName="ResearchExperience">
              <ResearchExperience />
            </Layout>
          }
        />

        <Route
          path="/certifications"
          element={
            <Layout currentPageName="Certifications">
              <Certifications />
            </Layout>
          }
        />

        <Route
          path="/awards"
          element={
            <Layout currentPageName="Awards">
              <Awards />
            </Layout>
          }
        />

        <Route
          path="/volunteering"
          element={
            <Layout currentPageName="Volunteering">
              <Volunteering />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout currentPageName="Contact">
              <Contact />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
