import BoardDetailPresenter from "./boardsDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./boardsDetail.queries";
import { useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import { FailModal } from "../../../commons/modal/commonsModal";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [modal, setModal] = useState({ link: false, map: false });
  const [likeUp] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_BOARD);
  const [dislikeUp] =
    useMutation<Pick<IMutation, "dislikeBoard">>(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detail,
    },
  });

  const onClickLinkModal = () => {
    setModal({ ...modal, link: !modal.link });
  };
  const onClickMapModal = () => {
    setModal({ ...modal, map: !modal.map });
  };
  const onClickLikeBtn = async () => {
    try {
      await likeUp({
        variables: {
          boardId: router.query.detail,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.detail,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) PostFail(error.message);
    }
  };
  const onClickDislikeBtn = async () => {
    try {
      await dislikeUp({
        variables: {
          boardId: router.query.detail,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.detail,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.detail}/edit`);
  };

  return (
    <BoardDetailPresenter
      data={data}
      onClickLinkModal={onClickLinkModal}
      onClickMapModal={onClickMapModal}
      modal={modal}
      onClickLikeBtn={onClickLikeBtn}
      onClickDislikeBtn={onClickDislikeBtn}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
