import styled from "styled-components";
import Header from "../components/Header";
import Welcome from "../pages/Welcome";
import QuestionPage from "../pages/QuestionPage";
import { data } from "../data";
import { useState } from "react";
import { type SubjectType } from "../data";
import AnswerPage from "../pages/AnswerPage";
import LightImg from "../assets/images/pattern-background-desktop-light.svg";
import DarkImg from "../assets/images/pattern-background-desktop-dark.svg";
import LightImgTablet from "../assets/images/pattern-background-tablet-light.svg";
import DarkImgTablet from "../assets/images/pattern-background-tablet-dark.svg";
import LightImgMobile from "../assets/images/pattern-background-mobile-light.svg";
import DarkImgMobile from "../assets/images/pattern-background-mobile-dark.svg";
import { useTheme } from "../context/ThemeContext";

export default function () {
  const quesData= data;
  const [subject, setSubject] = useState<SubjectType | "Answer" | null>(null);
  const [score, setScore] = useState<number>(0);
  const { mode } = useTheme();

  return (
    <Layout>
      <LayoutImg $mode={mode}></LayoutImg>
      <Header subject={subject}/>
      <MainContent>
        {subject != null ? (
          subject == "Answer" ? (
            <AnswerPage score={score} setScore={setScore} subject={subject} setSubject={setSubject}/>
          ) : (
            <QuestionPage
              score={score}
              setScore={setScore}
              quesData={quesData}
              subject={subject}
              setSubject={setSubject}
            />
          )
        ) : (
          <Welcome
            quesData={quesData}
            setSubject={setSubject}
          />
        )}
      </MainContent>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: transparent;
  position: relative;
  min-height: 100vh;
  padding: clamp(90px, 9vw, 97px) clamp(75px, 7.8vw, 140px);
  width: 100%;

  @media (min-width: 650px) and (max-width: 1024px) {
    padding: 54px 64px;
  }

  @media (max-width: 650px) {
    padding: 24px;
  }
`;

const LayoutImg = styled.div<{$mode: any}>`
  position: fixed;
  inset: 0;
  background-image: ${({$mode}) => $mode == "light" ? `url("${LightImg}")` : `url("${DarkImg}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  z-index: -1;

  @media (min-width: 650px) and (max-width: 1024px) {
    background-image: ${({$mode}) => $mode == "light" ? `url("${LightImgTablet}")` : `url("${DarkImgTablet}")`};
    background-position: unset;
    background-size: unset;
  }
  
  @media (max-width: 650px) {
    background-image: ${({$mode}) => $mode == "light" ? `url("${LightImgMobile}")` : `url("${DarkImgMobile}")`};
    background-position: unset;
    background-size: unset;
  }
`;

const MainContent = styled.div`
  margin-top: 100px;

  @media (min-width: 650px) and (max-width: 1024px) {
    margin-top: 47px;
  }
`;
