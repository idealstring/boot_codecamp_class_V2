import { Modal } from "antd";
import React, { useState } from "react";
import { FailModal } from "./commonsModal";
import { gql, useMutation } from "@apollo/client";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import * as S from "../../unit/modal/replyDelete/replyModal.styles";
import { ICommentDeleteModalProps } from "../../unit/modal/replyDelete/replyModal.types";

export const DELETE_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export default function MarketReplyDeleteModal(P: ICommentDeleteModalProps) {
  const { id } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

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
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: id,
        },
        update(chche, { data }) {
          chche.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const deletedId = data.deleteUseditemQuestionAnswer;
                const filterdPrev = prev.filter(
                  (el: any) => readField("_id", el) !== deletedId
                );
                return [...filterdPrev];
              },
            },
          });
        },
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
