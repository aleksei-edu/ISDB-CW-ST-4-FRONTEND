import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartForm />} />
      </Routes>
    </Router>
  );
}

export default App;
