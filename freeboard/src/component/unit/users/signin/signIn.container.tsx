import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import SignInPresenter from "./signIn.presenter";
import { LOGIN_USER } from "./signIn.queries";
import * as yup from "yup";
import { IOnClickSignInProps } from "./signIn.types";
import { FailModal, InfoModal } from "../../../commons/modal/commonsModal";

export default function SignInContainer() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email().required(`false`),
    password: yup.string().required(`false`),
  });

  const onClickSignIn = async (data: IOnClickSignInProps) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        FailModal("로그인 실패. 다시 시도 바랍니다.");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      router.push(`/users/mypage`);
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickRePassword = () => {
    InfoModal("이메일 인증 기능 곧 구현할게요. 조금만 기다려 주세요:)");
  };

  const onClickRegister = () => {
    router.push("/users/new");
  };

  return (
    <>
      <SignInPresenter
        onClickSignIn={onClickSignIn}
        onClickRePassword={onClickRePassword}
        onClickRegister={onClickRegister}
        schema={schema}
      />
    </>
  );
}
