import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import QuestionsCategory from "../components/QuestionsCategory";
import Question from "../components/Question";

function QuestionsContainer() {
  const [questionsList, setQuestionsList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.type === "featured") {
      getFeaturedQuestions();
    } else {
      getQuestions(params.type);
      console.log(params.type);
    }
  }, [params.type]);

  const getQuestions = async (name) => {
    const api = await fetch(
      `https://api.stackexchange.com/2.3/questions?page=1&pagesize=5&order=desc&sort=activity&site=stackoverflow`
    );
    const data = await api.json();
    setQuestionsList(data.items);
  };

  const getFeaturedQuestions = async () => {
    const api = await fetch(
      `https://api.stackexchange.com/2.3/questions/featured?page=1&pagesize=5&order=desc&sort=activity&site=stackoverflow`
    );
    const data = await api.json();
    setQuestionsList(data.items);
  };

  return (
    <Container>
      <Header>Questions</Header>
      <QuestionsCategory />
      <QuestionCard>
        {questionsList.map((item) => {
          return (
            <React.Fragment key={item.question_id}>
              <Question {...item} />
            </React.Fragment>
          );
        })}
      </QuestionCard>
      <Footer>
        <h2>Looking for more?</h2>
        <p>
          Browse the <SLink>complete list of questions</SLink>, or{" "}
          <SLink>popular tags</SLink>. Help us answer unanswered questions.
        </p>
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr auto auto;
  grid-template-areas:
    "headerarea"
    "categories"
    "mainContent"
    "footerArea";
`;
const Header = styled.header`
  grid-area: headerarea;
  font-size: 20px;
  font-weight: 500;
  color: #9c9a9a;
  padding: 2rem;
  height: 1rem;
`;

const QuestionCard = styled.div`
  grid-area: mainContent;
  display: flex;
  flex-direction: column;
  width: 100%;
  ::before {
    content: "";
    height: 0px;
    border: 0.1px solid #e6e0e0;
    margin: 10px;
  }
`;
const Footer = styled.section`
  grid-area: footerArea;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  vertical-align: middle;
  height: 5rem;
  h2 {
    font-weight: 500;
    color: #5f5e5e;
  }

  p {
    font-size: 14px;
  }
`;

const SLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: #24a6c7;
`;
export default QuestionsContainer;
