import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input01 from "../../../../../src/component/commons/inputs/01/input01";
import * as S from "../../../../../src/component/unit/users/password/password.styles";
import * as yup from "yup";
import { useMoveToPage } from "../../../../../src/component/commons/hooks/useMoveToPage";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  password: yup.string().min(8, "false").required("false"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "false")
    .required("false"),
});

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function PasswordChangePage() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: any) => {
    try {
      resetUserPassword({
        variables: {
          password: data.password,
        },
      });
      Modal.info({ content: "비밀번호 변경 완료!" });
      router.push("/users/mypage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <S.Container>
        <S.PageTitle>비밀번호 변경</S.PageTitle>
        <S.LabelWrapper onSubmit={handleSubmit(onClickSubmit)}>
          <S.Label>새 비밀번호</S.Label>
          <Input01
            type="password"
            register={register("password")}
            placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
            error={formState.errors.password?.message}
          />
          <S.Label>새 비밀번호 확인</S.Label>
          <Input01
            type="password"
            register={register("passwordConfirm")}
            placeholder="새 비밀번호를 다시 한번 더 적어주세요."
            error={formState.errors.passwordConfirm?.message}
          />
          <S.PasswordUpdateBtn>비밀번호 변경</S.PasswordUpdateBtn>
        </S.LabelWrapper>
        <S.CancelButtonWrapper>
          <S.CancelButton
            type="button"
            onClick={onClickMoveToPage("/users/mypage")}
          >
            취소
          </S.CancelButton>
        </S.CancelButtonWrapper>
      </S.Container>
    </>
  );
}
