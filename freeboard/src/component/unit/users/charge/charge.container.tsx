import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import ChargePresenter from "./charge.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FailModal, SuccessModal } from "../../../commons/modal/commonsModal";

const schema = yup.object({
  chargePoint: yup
    .number()
    .integer("true")
    .max(5000000, "true")
    .required("true"),
});
declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      user {
        userPoint {
          amount
        }
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function ChargeContainer() {
  const router = useRouter();
  const { register, handleSubmit, getValues, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { data: fetchUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [veiwPrice, setViewPrice] = useState(0);
  console.log(formState.errors.chargePoint?.message);

  const onClickPrice = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(
      "chargePoint",
      Number(getValues("chargePoint")) + Number(e.currentTarget.value)
    );
    setViewPrice(Number(getValues("chargePoint")));
  };

  const onChagePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setViewPrice(Number(e.currentTarget.value));
  };

  const onSubmitCharge = (data: any) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "ChargePoint",
        amount: data.chargePoint,
        buyer_email: fetchUser?.fetchUserLoggedIn.email,
        buyer_name: fetchUser?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          console.log(rsp.success);
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          SuccessModal(
            `${fetchUser?.fetchUserLoggedIn.name}님, ${rsp.paid_amount}원 충전완료 되었습니다.`
          );
          router.push("/users/mypage");
        } else {
          FailModal(
            `${fetchUser?.fetchUserLoggedIn.name}님, 충전을 실패했습니다. 다시 시도 바랍니다.`
          );
        }
      }
    );
  };

  return (
    <>
      <ChargePresenter
        register={register}
        handleSubmit={handleSubmit}
        onSubmitCharge={onSubmitCharge}
        getValues={getValues}
        setValue={setValue}
        onClickPrice={onClickPrice}
        onChagePrice={onChagePrice}
        veiwPrice={veiwPrice}
        formState={formState}
      />
    </>
  );
}
