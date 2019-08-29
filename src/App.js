import React from "react";
import "./App.css";
import { MyNavbar } from "./components/MyNavbar";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App container">
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;
