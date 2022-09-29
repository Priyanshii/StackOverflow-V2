import React from "react";
import LeftNavbar from "./components/LeftNavbar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <LeftNavbar />
      </Router>
    </div>
  );
}

export default App;
