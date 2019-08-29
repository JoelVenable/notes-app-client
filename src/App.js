import React from "react";
import "./App.css";
import { MyNavbar } from "./components/MyNavbar";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App container">
      <MyNavbar />
      <Routes />
    </div>
  );
}

export default App;
