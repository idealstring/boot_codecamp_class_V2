import { dateFormatter, PointFormatter } from "../../../../commons/utils/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import * as S from "./myPage.styles";
import { IMyPagePresenterProps } from "./myPage.types";

function MyPagePresenter(P: IMyPagePresenterProps) {
  const { fetchPointTransactions, fetchUserLoggedIn, allCount, setPageCount } =
    P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.PointWrapper>
        <S.PointInnerWrapper>
          <S.PointTitle>사용 가능 포인트</S.PointTitle>
          <S.Point>
            {fetchUserLoggedIn?.fetchUserLoggedIn.userPoint
              ? PointFormatter(
                  fetchUserLoggedIn?.fetchUserLoggedIn.userPoint.amount
                )
              : null}{" "}
            P
          </S.Point>
        </S.PointInnerWrapper>
        <S.Word>적절한 구입이 삶을 윤택하게 만듭니다.</S.Word>
      </S.PointWrapper>
      <S.HistoryTitleWrapper>
        <S.HistoryTitle>포인트 내역</S.HistoryTitle>
        <S.ChargeBtn onClick={onClickMoveToPage("/users/mypage/charge")}>
          충전하기
        </S.ChargeBtn>
      </S.HistoryTitleWrapper>
      <S.HistoryWrapper>
        <S.HistoryTH>날짜</S.HistoryTH>
        <S.HistoryTH>상태</S.HistoryTH>
        <S.HistoryTH>포인트</S.HistoryTH>
        <S.HistoryTH>잔여 포인트</S.HistoryTH>
      </S.HistoryWrapper>
      {fetchPointTransactions?.fetchPointTransactions.map((el) => (
        <S.HistoryWrapper>
          <S.HistoryDate>{dateFormatter(el.createdAt)}</S.HistoryDate>
          <S.ChargePurchase>{el.status}</S.ChargePurchase>
          <S.IncreaDecrea minus={String(el.amount).includes("-")}>
            {PointFormatter(el.amount)} P
          </S.IncreaDecrea>
          <S.Balance>{PointFormatter(el.balance)} P</S.Balance>
        </S.HistoryWrapper>
      ))}
      <PageNation02 allCount={allCount} setPageCount={setPageCount} />
    </S.Container>
  );
}

export default MyPagePresenter;
