import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FailModal, InfoModal } from "../../../commons/modal/commonsModal";
import UserRegisterPresenter from "./userRegister.presenter";
import { CREATE_USER } from "./userRegister.queries";
import { IOnClickRegisterProps } from "./userRegister.types";

export default function UserRegisterContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const onClickRegister = async (data: IOnClickRegisterProps) => {
    console.log(data);
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      InfoModal("회원가입을 축하합니다!");
      router.push("/users/signIn");
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickSignIn = () => {
    router.push("/users/signIn");
  };

  return (
    <>
      <UserRegisterPresenter
        onClickRegister={onClickRegister}
        onClickSignIn={onClickSignIn}
      />
    </>
  );
}
