import styled from "@emotion/styled";
import { breakPoints } from "../../src/styles/media";

const Item = styled.div`
  width: 95%;
  height: 400px;
  background: red;

  // tablet 환경에서의 미디어쿼리
  // 768이상, 991px 이하
  @media ${breakPoints.tablet} {
    background: green;
  }

  // mobile 환경에서의 미디어쿼리
  // 768이하
  @media ${breakPoints.mobile} {
    background: blue;
  }
`;

export default function ReponsicePage() {
  return <Item>박스에요</Item>;
}
