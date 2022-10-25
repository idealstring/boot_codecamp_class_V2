import styled from "@emotion/styled";

type ILayoutStylesProps = {
  isNormalScreen: boolean;
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 500px;

  display: flex;
  flex-direction: ${(props: ILayoutStylesProps) =>
    props.isNormalScreen ? "row" : "column"};
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContentsWrapper = styled.section`
  padding: ${(props: ILayoutStylesProps) =>
    props.isNormalScreen ? "30px" : "30px 0"};
  width: ${(props: ILayoutStylesProps) =>
    props.isNormalScreen ? "80%" : "100%"};
  max-width: 1000px;
  min-width: 200px;
`;
