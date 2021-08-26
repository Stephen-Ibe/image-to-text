import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual Image Upload</h3>
        <img src={imagePath} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
