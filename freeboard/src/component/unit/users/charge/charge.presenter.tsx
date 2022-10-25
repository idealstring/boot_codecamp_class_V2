import * as S from "./charge.styles";
import Head from "next/head";
import { IChargePresenterProps } from "./charge.types";
import { PriceFormatter } from "../../../../commons/utils/utils";

export default function ChargePresenter(P: IChargePresenterProps) {
  const {
    register,
    handleSubmit,
    onSubmitCharge,
    onClickPrice,
    onChagePrice,
    veiwPrice,
    formState,
  } = P;

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.TitleWrapper>
        <S.Title>포인트 충전</S.Title>
      </S.TitleWrapper>
      <S.BodyWrapper>
        <span>충전 금액을 입력해 주세요.(최대 500만 원)</span>
        <S.ChargeForm onSubmit={handleSubmit(onSubmitCharge)}>
          <S.Input
            type="text"
            {...register("chargePoint")}
            onChange={onChagePrice}
            error={formState.errors.chargePoint?.message}
          />
          <div>{PriceFormatter(veiwPrice)}</div>
          <S.PriceBtnWrapper>
            <S.PriceBtn type="button" onClick={onClickPrice} value={1000}>
              +1천
            </S.PriceBtn>
            <S.PriceBtn type="button" onClick={onClickPrice} value={10000}>
              +1만
            </S.PriceBtn>
            <S.PriceBtn type="button" onClick={onClickPrice} value={20000}>
              +2만
            </S.PriceBtn>
            <S.PriceBtn type="button" onClick={onClickPrice} value={100000}>
              +10만
            </S.PriceBtn>
            <S.PriceBtn type="button" onClick={onClickPrice} value={1000000}>
              +100만
            </S.PriceBtn>
          </S.PriceBtnWrapper>
          <S.ChargeButton type="submit">충전하기</S.ChargeButton>
        </S.ChargeForm>
      </S.BodyWrapper>
    </>
  );
}
