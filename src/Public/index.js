import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";

import HomePage from "./HomePage";
import Contact from "./ContactPage";
import About from "./AboutPage";

import React from "react";

export default function index() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
