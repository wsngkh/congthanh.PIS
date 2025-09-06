import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./HomePage";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import FAQs from "./FAQs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);