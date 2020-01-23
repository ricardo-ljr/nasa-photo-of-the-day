import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaGrid from "./components/NasaGrid";

function App() {
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=t3F5j6ddCIh7btoXDgbTFmLp5COSAOfvqvQ03bUd&date=&date=2012-03-14`
      )
      .then(response => {
        console.log(response);
      });
  }, []);
  return (
    <div className="App">
      <NasaGrid />
    </div>
  );
}

export default App;
