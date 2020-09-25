import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Side from "./components/Side";

function App() {
  return (
    <div className="App">
      {/* Side */}
      <Side />

      <aside>
        {/* Nav */}
        <Nav />
        <Home />
      </aside>
    </div>
  );
}

export default App;
