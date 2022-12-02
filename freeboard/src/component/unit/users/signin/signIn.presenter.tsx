import * as S from "./signIn.styles";
import { ISignInPresenterProps } from "./signIn.types";

export default function SignInPresenter(P: ISignInPresenterProps) {
  const { onClickSignIn, onClickRegister, register, handleSubmit, formState } =
    P;

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Hgroup>
            <h1>로그인</h1>
          </S.Hgroup>
          <S.Form>
            <S.InputEmail
              type="text"
              placeholder="이메일"
              error={formState.errors.email?.message}
              {...register("email")}
            />
            <S.InputPassword
              type="password"
              placeholder="비밀번호"
              error={formState.errors.password?.message}
              {...register("password")}
            />
            <S.SignInBtn type="button" onClick={handleSubmit(onClickSignIn)}>
              로그인
            </S.SignInBtn>
          </S.Form>
          <S.RegisterWrapper>
            <span>아직 아이디가 없으신가요?</span>{" "}
            <button onClick={onClickRegister}>회원가입</button>
          </S.RegisterWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
