import { Modal } from "antd";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { StyleSet } from "../../../commons/style/styleSet";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
import { PriceFormatter } from "../../../commons/utils/utils";

const BuyBtn = styled.button`
  padding: 0 16px;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  color: #fff;
  background-color: ${StyleSet.colors.point01};
  cursor: pointer;
`;

export const CREATE_BUYING_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      price
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      price
      soldAt
      seller {
        _id
      }
    }
  }
`;

const MarketProductPurchase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const [BuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_BUYING_SELLING);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.detail),
    },
  });
  const { data: fetchUserData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickOk = async () => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용할 수 있습니다." });
      return;
    }
    if (
      fetchUserData?.fetchUserLoggedIn._id === data?.fetchUseditem.seller?._id
    ) {
      Modal.warn({ content: "본인 상품은 구매할 수 없습니다." });
      return;
    }
    try {
      await BuyingAndSelling({
        variables: { useritemId: String(router.query.detail) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.detail,
            },
          },
        ],
      });

      Modal.info({ content: "상품 구매 완료" });
      setModalOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      setModalOpen(false);
    }
  };

  return (
    <>
      <BuyBtn onClick={() => setModalOpen(true)}>구매</BuyBtn>
      <Modal
        title="상품 구매"
        centered
        open={modalOpen}
        onOk={onClickOk}
        onCancel={() => setModalOpen(false)}
      >
        {fetchUserData?.fetchUserLoggedIn.name}님,
        <br />
        <strong>{data?.fetchUseditem.name}</strong>(
        {PriceFormatter(data?.fetchUseditem.price)})
        <br />
        상품을 구매하시겠습니까?
      </Modal>
    </>
  );
};

export default MarketProductPurchase;
