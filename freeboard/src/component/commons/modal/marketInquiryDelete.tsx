import { Modal } from "antd";
import React, { useState } from "react";
import { FailModal } from "./commonsModal";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Reference, StoreObject, useMutation } from "@apollo/client";
import * as S from "../../unit/modal/inquiryDelete/inquiryModal.styles";
import { ICommentDeleteModalProps } from "../../unit/modal/inquiryDelete/inquiryModal.types";
import { DELETE_USEDITEM_QUESTION } from "../../unit/comment/market/inquiryList/inquiryList.queries";

export default function MarketInquiryDeleteModal(P: ICommentDeleteModalProps) {
  const { id } = P;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteMarketCommentFunc();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteMarketCommentFunc = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: id,
        },
        update(chche, { data }) {
          chche.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const deletedId = data.deleteUseditemQuestion;
                const filterdPrev = prev.filter(
                  (el: Reference | StoreObject | undefined) =>
                    readField("_id", el) !== deletedId
                );
                return [...filterdPrev];
              },
            },
          });
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.detail, page: 1 },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  return (
    <>
      <S.CommentDeleteBtn onClick={showModal}>삭제</S.CommentDeleteBtn>
      <Modal
        title="댓글 삭제"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        okText="예"
        cancelText="아니오"
        okType="danger"
      >
        <S.Wrapper>
          <S.InnerRow>
            <ExclamationCircleOutlined style={{ color: "#b1312d" }} />
            &nbsp;&nbsp;&nbsp;삭제하시면 다시 복구할 수 없습니다. 정말
            삭제하시겠습니까?
          </S.InnerRow>
        </S.Wrapper>
      </Modal>
    </>
  );
}
