import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>SCP Catalogue</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
