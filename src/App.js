import React from "react";
import LeftNavbar from "./components/LeftNavbar";
import Home from "./pages/Home";
import JobContainer from "./pages/JobContainer";
import QuestionsContainer from "./pages/QuestionsContainer";
import RightNavbar from "./components/RightNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <MainContainer>
        <Router>
          <LeftNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions/:type" element={<QuestionsContainer />} />
            <Route path="/jobs" element={<JobContainer />} />
          </Routes>
          <RightNavbar />
        </Router>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
`;
export default App;
