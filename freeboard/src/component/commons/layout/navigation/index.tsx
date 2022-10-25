import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { StyleSet } from "../../../../commons/style/styleSet";

const Container = styled.header`
  width: 100%;
`;
const Wrapper = styled.header`
  margin: 0 auto;
  padding-bottom: 25px;
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  margin: 0 10px;
  background-color: transparent;
  border: none;

  font-size: ${StyleSet.fontSize.h5};

  cursor: pointer;
`;

type INavigationProps = {
  isNav: boolean;
};

export default function Navigation(P: INavigationProps) {
  const { isNav } = P;
  const router = useRouter();
  return (
    <>
      {isNav ? (
        <Container>
          <Wrapper>
            <NavButton
              onClick={() => {
                router.push("/market");
              }}
            >
              MARKET
            </NavButton>
            |
            <NavButton
              onClick={() => {
                router.push("/boards");
              }}
            >
              FREEBOARD
            </NavButton>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
}
