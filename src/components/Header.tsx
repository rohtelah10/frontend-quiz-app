import styled from "styled-components";
import ThemeButton from "./ThemeButton";
import SunImgLight from "../assets/images/icon-sun-dark.svg";
import SunImgDark from "../assets/images/icon-sun-light.svg";
import MoonImgLight from "../assets/images/icon-moon-dark.svg";
import MoonImgDark from "../assets/images/icon-moon-light.svg";
import type { SubjectType } from "../data";
import { TextPreset4 } from "./Typography/Typography";
import AccessImage from "../assets/images/icon-accessibility.svg";
import HtmlImage from "../assets/images/icon-html.svg";
import CssImage from "../assets/images/icon-css.svg";
import JsImage from "../assets/images/icon-js.svg";
import { useTheme } from "../context/ThemeContext";

export default function ({
  subject
}: {
  subject: SubjectType | "Answer" | null;
}) {

  const { mode, toggleTheme } = useTheme();

  const SubjectImage = {
    "HTML" : HtmlImage,
    "CSS" : CssImage,
    "JavaScript": JsImage,
    "Accessibility": AccessImage
  }

  const isValidSubject = subject && subject as keyof typeof SubjectImage;
  return (
    <Header>
      <Subject>
        {subject && isValidSubject && (
          <>
            
            <SubjectImg src={SubjectImage[isValidSubject]} alt=""></SubjectImg>
            <TextPreset4>{subject}</TextPreset4>
          </>
        )}
      </Subject>
      <Theme>
        <SunImg src={mode=="light" ?SunImgLight: SunImgDark} alt="Sun"></SunImg>
        <ThemeButton active={mode === "dark"} onClick={toggleTheme}/>
        <MoonImg src={mode=="light" ? MoonImgLight: MoonImgDark} alt="Moon"></MoonImg>
      </Theme>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Theme = styled.section`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Subject = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const SubjectImg = styled.img``;

const SunImg = styled.img``;

const MoonImg = styled.img``;
