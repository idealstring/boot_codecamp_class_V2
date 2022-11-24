import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FailModal, InfoModal } from "../../../commons/modal/commonsModal";
import UserRegisterPresenter from "./userRegister.presenter";
import { CREATE_USER } from "./userRegister.queries";
import { IOnClickRegisterProps } from "./userRegister.types";

const dataList = [
  { id: 1, text: "만 14세 이상입니다", essential: "필수" },
  { id: 2, text: "개인정보 마케팅 활용 동의", essential: "선택" },
];

export default function UserRegisterContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [checkList, setCheckList] = useState<number[]>([]);

  const isCheckedAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allChecked: number[] = [];
      dataList.forEach((el) => {
        allChecked.push(Number(el.id));
      });
      setCheckList(allChecked);
    } else {
      setCheckList([]);
    }
  };
  const isChecked = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckList((prev) => [...prev, id]);
    } else {
      setCheckList(checkList.filter((el) => el !== id));
    }
  };

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
        dataList={dataList}
        isCheckedAll={isCheckedAll}
        isChecked={isChecked}
        checkList={checkList}
      />
    </>
  );
}
