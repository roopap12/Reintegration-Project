import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Resources } from "./components/resources";
import { SuccessStories } from "./components/successstories";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Footer } from "./components/footer";
import { Legalaid } from "./components/legalaid";
import "./App.css";
import { Accommodation } from "./components/accommodation";
import { Education } from "./components/education";
import { Employment } from "./components/employment";
import { Mentalhealth } from "./components/mentalhealth";
import { Rehabilitation } from "./components/rehabilitation";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Resources data={landingPageData.Resources} />
              <SuccessStories data={landingPageData.SuccessStories} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </Layout>
          }
        />
        <Route
          path="/legalaid"
          element={
            <Layout>
              <Legalaid data={landingPageData.Services} />
            </Layout>
          }
        />
        <Route
          path="/accommodation"
          element={
            <Layout>
              <Accommodation data={landingPageData.Services} />
            </Layout>
          }
        />
        <Route
          path="/education"
          element={
            <Layout>
              <Education data={landingPageData.Services} />
            </Layout>
          }
        />
        <Route
          path="/employment"
          element={
            <Layout>
              <Employment data={landingPageData.Services} />
            </Layout>
          }
        />
        <Route
          path="/mentalhealth"
          element={
            <Layout>
              <Mentalhealth data={landingPageData.Services} />
            </Layout>
          }
        />
        <Route
          path="/rehabilitation"
          element={
            <Layout>
              <Rehabilitation data={landingPageData.Services} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
