import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { themeState } from "../../src/store";

const Wrapper = styled.section``;

const Title = styled.h1``;

const Content = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.bgColor};
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.bgColor};
`;

export default function CommonsThemePage() {
  // const theme = useTheme();
  // console.log("theme is", theme);
  const [theme, setTheme] = useRecoilState(themeState);

  const onClickBtn = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return (
    <Wrapper>
      <Title>공통 CSS 연습</Title>
      <Content>
        <p>텍스트용 박스 영역입니다.</p>
      </Content>
      <Button onClick={onClickBtn}>버튼입니다.</Button>
    </Wrapper>
  );
}
