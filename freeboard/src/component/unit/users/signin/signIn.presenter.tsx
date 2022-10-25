import * as S from "./signIn.styles";
import { ISignInPresenterProps } from "./signIn.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignInPresenter(P: ISignInPresenterProps) {
  const { onClickSignIn, onClickRePassword, onClickRegister, schema } = P;
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
          <S.LoginWrapper>
            <S.LoginBtn onClick={onClickRePassword}>비밀번호 재설정</S.LoginBtn>
            <S.LoginBtn onClick={onClickRegister}>회원가입</S.LoginBtn>
          </S.LoginWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
