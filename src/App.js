import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage";

function Menu() {
  return (
    <>
      <div className="menu">
        <NavLink className="menu__item" to="/">
          HomePage
        </NavLink>
        <NavLink className="menu__item" to="/drift">
          DriftPage
        </NavLink>
        <NavLink className="menu__item" to="/forza">
          ForzaPage
        </NavLink>
        <NavLink className="menu__item" to="/timeattack">
          TimeAttackPage
        </NavLink>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
