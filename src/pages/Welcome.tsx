import styled, { type DefaultTheme } from "styled-components";
import {
  TextPreset2Light,
  TextPreset2Medium,
  TextPreset4,
  TextPreset6,
} from "../components/Typography/Typography";
import { type SubjectType } from "../data";

export default function ({
  quesData,
  setSubject,
}: {
  quesData: any;
  setSubject: React.Dispatch<
    React.SetStateAction<SubjectType | "Answer" | null>
  >;
}) {

  const ImgBack: Record<string, keyof DefaultTheme["colors"]> = {
    "HTML": "html-icon",
    "CSS": "css-icon",
    "JavaScript": "js-icon",
    "Accessibility": "access-icon",
  }



  return (
    <WelcomePage>
      <WelcomeBox>
        <div>
          <TextPreset2Light>Welcome to the</TextPreset2Light>
          <TextPreset2Medium>Frontend Quiz!</TextPreset2Medium>
        </div>
        <TextPreset6>
          <p style={{ color: "#626c7f" }}>Pick a subject to get started.</p>
        </TextPreset6>
      </WelcomeBox>

      <SubjectList>
        {quesData.quizzes.map((elem: any) => {
          return (
            <Subject
              key={elem.title}
              onClick={() => {
                setSubject(elem.title);
              }}
            >
              <SubjectDiv backCol={ImgBack[elem.title as keyof typeof ImgBack]}>
                <SubjectImage src={elem.icon} alt=""></SubjectImage>
              </SubjectDiv>
              <TextPreset4>{elem.title}</TextPreset4>
            </Subject>
          );
        })}
      </SubjectList>
    </WelcomePage>
  );
}

const WelcomePage = styled.main`
  display: flex;
  justify-content: space-between;

  @media (min-width: 650px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const WelcomeBox = styled.section`
  width: 465px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 650px) and (max-width: 1024px) {
    gap: 16px;
    width: 100%;
  }

  @media (max-width: 650px) {
    gap: 16px;
    width: 100%;
  }
`;

const SubjectList = styled.nav`
  display: grid;
  gap: 16px;
  width: 564px;

  @media (min-width: 650px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Subject = styled.button`
  border-radius: 24px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.option};
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  box-shadow: ${({ theme }) => theme.colors["drop-shadow"]};
`;

const SubjectImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SubjectDiv = styled.div<{backCol: keyof DefaultTheme["colors"]}>`
  background-color: ${({ theme, backCol }) => theme.colors[backCol]};
  border-radius: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
