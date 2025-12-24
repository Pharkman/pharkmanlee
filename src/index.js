import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SoundProvider } from "./click-sound/ClickSoundButton";
import { ThemeSoundProvider } from "./themesound/theme-sound";
import App from "./App";
import CustomCursor from "./component/customCursor";
import AllMyProjects from "./all-project/all-projects";
import MoreAboutMe from "./more baout me/more-about-me";
import "./index.css";

ReactDOM.render(
  <ThemeSoundProvider>
    <SoundProvider>
      <Router>
        <CustomCursor />
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/all-projects" element={<AllMyProjects />} />
          <Route path="/more-about-me" element={<MoreAboutMe />} />
        </Routes>
      </Router>
    </SoundProvider>
  </ThemeSoundProvider>,
  document.getElementById("root")
);