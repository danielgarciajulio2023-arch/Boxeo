import React from "react";
import logo from "../assets/logo.webp"; 

export default function Header() {
  const title = "Boxing Products Store";

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="search-bar"
        />
      </div>
    </header>
  );
}
