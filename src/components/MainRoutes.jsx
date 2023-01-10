import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About.page";
import { Home } from "../pages/Home.page";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
