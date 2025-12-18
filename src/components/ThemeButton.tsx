import styled from "styled-components";

type Props = {
    active: boolean;
    onClick: () => void;
}

export default function ThemeButton( {active, onClick}: Props) {
  return (
    <>
      <StyledThemeButton $active={active} onClick={onClick}>
        <ThemeToggle />
      </StyledThemeButton>
    </>
  );
}

const StyledThemeButton = styled.button<{ $active: boolean }>`
  width: 48px;
  height: 28px;
  padding: 4px;
  border-radius: 999px;
  border: none;
  display: flex;
  justify-content: ${({ $active }) => ($active ? "flex-end" : "flex-start")};
  align-items: center;
  background-color: #a729f5;
`;

const ThemeToggle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
`;
