import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AvaLaundry from "./display-project/ava-laundry";
import AvaPay from "./display-project/avapay";
import FarmWise from "./display-project/farm-wise";
import MatchSingle from "./display-project/match-single";
import MediScan from "./display-project/mediscan";
import GadgetFix from "./display-project/gadget-fix";
import CustomCursor from "./component/customCursor";
import "./index.css";

ReactDOM.render(
  <Router>
    <CustomCursor /> {/* Place CustomCursor here to make it global */}
    <Routes>
      {/* Define routes for each page */}
      <Route path="/" element={<App />} />
      <Route path="/ava-laundry" element={<AvaLaundry />} />
      <Route path="/avapay" element={<AvaPay />} />
      <Route path="/farm-wise" element={<FarmWise />} />
      <Route path="/gadget-fix" element={<GadgetFix />} />
      <Route path="/match-single" element={<MatchSingle />} />
      <Route path="/mediscan" element={<MediScan />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

