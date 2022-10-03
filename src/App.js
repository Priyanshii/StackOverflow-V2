import React from "react";
import LeftNavbar from "./components/LeftNavbar";
import Home from "./pages/Home";
import JobContainer from "./pages/JobContainer";
import QuestionsContainer from "./pages/QuestionsContainer";
import RightNavbar from "./components/RightNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <MainContainer>
          <Header />
          <LeftNavbar />
          <MiddleSection>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions/:type" element={<QuestionsContainer />} />
              <Route path="/jobs" element={<JobContainer />} />
            </Routes>
          </MiddleSection>
          <RightNavbar />
          <Footer />
        </MainContainer>
      </Router>
    </div>
  );
}

const MainContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "leftNavBar headerArea headerArea headerArea headerArea headerArea "
    "leftNavBar MainContent MainContent MainContent rightNavBar rightNavBar"
    "leftNavBar MainContent MainContent MainContent rightNavBar rightNavBar"
    "leftNavBar MainContent MainContent MainContent rightNavBar rightNavBar"
    "leftNavBar MainContent MainContent MainContent rightNavBar rightNavBar"
    "footerArea footerArea footerArea footerArea footerArea footerArea";
`;

const MiddleSection = styled.div`
  grid-area: MainContent;
  ::before {
    content: "";
    height: 0px;
    width: auto;
    border: 0.1px solid #9c9a9a;
  }

  @media screen {
  }
`;
export default App;
