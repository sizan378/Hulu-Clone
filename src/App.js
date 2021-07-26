import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import request from "./request";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTreanding);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Nav bar */}
      <Nav setSelectedOption={setSelectedOption} />

      {/* Results */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}
