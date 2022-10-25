import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const ContentsButton = styled.button`
  margin: 0 10px 0 0;
  border: none;
  background-color: transparent;
  position: relative;

  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      width: 65px;
      height: 3px;
      background: ${StyleSet.colors.point01};
      border-radius: 3px;
      transition: 1s;

      position: absolute;
      bottom: -5px;
      left: 5px;
    }
  }
`;
export default function MyPageMarketBtnWrapper() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <ContentsButton onClick={onClickMoveToPage("/users/mypage/basket")}>
        장바구니
      </ContentsButton>
      <ContentsButton onClick={onClickMoveToPage("/users/mypage/sales")}>
        판매내역
      </ContentsButton>
      <ContentsButton onClick={onClickMoveToPage("/users/mypage/bought")}>
        구매내역
      </ContentsButton>
    </>
  );
}
