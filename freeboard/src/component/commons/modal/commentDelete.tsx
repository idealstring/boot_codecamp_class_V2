import { Modal } from "antd";
import React, { ChangeEvent, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../../unit/comment/board/commentList/commentList.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as S from "../../unit/modal/commentDelete/deleteModal.styles";
import { ICommentDeleteModalProps } from "../../unit/modal/commentDelete/deleteModal.types";
import { FailModal } from "./commonsModal";

export default function CommentDeleteModal(P: ICommentDeleteModalProps) {
  const { id } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteBoardCommentFunc();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const deleteBoardCommentFunc = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: id,
          password: password,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail, page: 1 },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  return (
    <>
      <S.CommentDeleteBtn onClick={showModal}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="#BDBDBD"
          />
        </svg>
      </S.CommentDeleteBtn>
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
          <S.InnerRow>
            <S.InputDesign
              type="text"
              onChange={onChangeInputPassword}
              placeholder="비밀번호를 입력하세요."
            />
          </S.InnerRow>
        </S.Wrapper>
      </Modal>
    </>
  );
}
