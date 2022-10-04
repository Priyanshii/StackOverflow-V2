import React from "react";
import styled from "styled-components";
function footer() {
  return (
    <footerContainer>
      footer
      {/* <UpperSection>
        <a href="#">about</a>
        <a href="#">tour</a>
        <a href="#">help</a>
        <a href="#">blog</a>
        <a href="#">chat</a>
        <a href="#">data</a>
        <a href="#">legal</a>
        <a href="#">privacy policy</a>
        <a href="#">work here</a>
        <a href="#">advertising info</a>
        <a href="#">mobile</a>
        <a href="#">contact us</a>
        <a href="#">feedback</a>
      </UpperSection> */}
    </footerContainer>
  );
}
const footerContainer = styled.div`
  grid-area: footerArea;

  ::before {
    content: "";
    width: 100%;
    height: 0px;
    border: 0.1px solid #7c7c7c;
  }
`;

// const UpperSection = styled.section`
//   display: flex;
//   justify-content: flex-start;
//   padding: 10px;
//   /* height: fit-content; */
// `;
export default footer;
