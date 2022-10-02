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
      `https://api.stackexchange.com/2.3/questions?page=1&pagesize=8&order=desc&sort=activity&site=stackoverflow`
    );
    const data = await api.json();
    setQuestionsList(data.items);
  };

  const getFeaturedQuestions = async () => {
    const api = await fetch(
      `https://api.stackexchange.com/2.3/questions/featured?page=1&pagesize=8&order=desc&sort=activity&site=stackoverflow`
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
        <h3>Looking for more?</h3>
        <p>
          Browse the <SLink>complete list of questions</SLink>, or{" "}
          <SLink>popular tags</SLink>. Help us answer unanswered questions.
        </p>
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Header = styled.header`
  font-size: 20px;
  font-weight: 500;
  color: #9c9a9a;
  padding: 2rem;
  flex: 0 0 50px;
`;

const QuestionCard = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  ::before {
    content: "";
    width: 100%;
    height: 0px;
    border: 0.1px solid #e6e0e0;
    margin: 0 10px;
  }
`;
const Footer = styled.section`
  text-align: center;
  margin: 5rem;
  padding: 1rem;
  text-align: center;
  vertical-align: bottom;
  align-self: flex-end;
  flex: auto;
  h3 {
    font-weight: 500;
    color: #5f5e5e;
  }

  p {
    font-size: 12px;
  }
`;

const SLink = styled(NavLink)`
  text-decoration: none;
  color: #24a6c7;
`;
export default QuestionsContainer;
