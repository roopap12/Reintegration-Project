import React, { useState, useEffect } from "react";
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

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Legalaid data={landingPageData.Services}/>
      <Accommodation data={landingPageData.Services} />
      <Education data={landingPageData.Services} />
      <Employment data={landingPageData.Services} />
      <Mentalhealth data={landingPageData.Services} />
      <Rehabilitation data={landingPageData.Services} />
      <Resources data={landingPageData.Resources} />
      <SuccessStories data={landingPageData.SuccessStories} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
