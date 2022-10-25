import * as S from "./userRegister.styles";
import { IUserRegisterPresenterProps } from "./userRegister.types";
import { useForm } from "react-hook-form";
import Input01 from "../../../commons/inputs/01/input01";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("false"),
  password: yup.string().min(8, "false").required("false"),
  name: yup.string().required("false").min(2, "false").max(6, "false"),
});

export default function UserRegisterPresenter(P: IUserRegisterPresenterProps) {
  const { onClickRegister, onClickSignIn } = P;
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: null,
      email: null,
      password: null,
    },
  });

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Hgroup>
            <h1>회원가입</h1>
          </S.Hgroup>
          <S.Form onSubmit={handleSubmit(onClickRegister)}>
            <S.Label>이메일</S.Label>
            <Input01
              type="text"
              register={register("email")}
              placeholder="leesanghyeon@sanghyeon.shop"
              error={formState.errors.email?.message}
            />
            <S.Label>비밀번호</S.Label>
            <Input01
              type="password"
              register={register("password")}
              placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
              error={formState.errors.password?.message}
            />
            <S.Label>닉네임</S.Label>
            <Input01
              type="text"
              register={register("name")}
              placeholder="별명 (2~15자)"
              error={formState.errors.name?.message}
            />
            <S.Label>약관동의</S.Label>
            <S.ConditionsWrapper>
              <S.Inner>
                <input type="checkbox" />
                <S.AllCheck>전체 동의</S.AllCheck>
              </S.Inner>
              <S.Line />
              <S.Inner>
                <input type="checkbox" />
                <S.EssentialCheck>만 14세 이상입니다</S.EssentialCheck>
              </S.Inner>
              <S.Inner>
                <input type="checkbox" />
                <S.SelectedCheck>개인정보 마케팅 활용 동의</S.SelectedCheck>
              </S.Inner>
            </S.ConditionsWrapper>
            <S.UserRegisterBtn>회원가입하기</S.UserRegisterBtn>
          </S.Form>
          <S.LoginWrapper>
            이미 아이디가 있으신가요?{" "}
            <S.LoginBtn onClick={onClickSignIn}>로그인</S.LoginBtn>
          </S.LoginWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
