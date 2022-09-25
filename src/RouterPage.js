import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Game from "./pages/Game";
import Marketplace from "./pages/Marketplace";
import Layout from "./Componets/Layout";
import Homepage from "./pages/Homepage";
export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} > 
            <Route index element={<Homepage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/market" element={<Marketplace />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
