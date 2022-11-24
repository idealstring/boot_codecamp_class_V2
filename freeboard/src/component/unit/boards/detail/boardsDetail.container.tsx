import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailPresenter from "./boardsDetail.presenter";
import { IMutation } from "../../../../commons/types/generated/types";
import { FailModal, SuccessModal } from "../../../commons/modal/commonsModal";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./boardsDetail.queries";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [mapModal, setMapModal] = useState(false);
  const [likeUp] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_BOARD);
  const [dislikeUp] =
    useMutation<Pick<IMutation, "dislikeBoard">>(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detail,
    },
  });

  const onClickLinkModal = (link: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          SuccessModal("클립보드에 복사 완료!");
        })
        .catch(() => {
          FailModal("다시 한번 클릭해 주세요.");
        });
    } else {
      if (document.queryCommandSupported("copy")) {
        return FailModal("복사하기가 지원되지 않는 브라우저입니다.");
      }

      const textarea = document.createElement("textarea");
      textarea.value = link;
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.position = "fixed";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      SuccessModal("클립보드에 복사 완료!");
    }
  };
  const onClickMapModal = () => {
    setMapModal((prev) => !prev);
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
      if (error instanceof Error) FailModal(error.message);
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
      mapModal={mapModal}
      onClickLikeBtn={onClickLikeBtn}
      onClickDislikeBtn={onClickDislikeBtn}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
