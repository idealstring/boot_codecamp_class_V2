import CommentWritePresenter from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import {
  ICommentWriteContainerProps,
  IMyVariables,
  IUpdateBoardCommentInput,
} from "./commentWrite.types";
import { FailModal } from "../../../../commons/modal/commonsModal";

export default function CommentWriteContainer(P: ICommentWriteContainerProps) {
  const { isEdit, onClickIsEditToggle, comment } = P;
  const router = useRouter();

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [inputData, setInputData] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 0,
  });
  const [errorOutput, setErrorOutput] = useState({
    writer: false,
    password: false,
    contents: false,
    rating: false,
  });

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
    if (e.target.value) {
      setErrorOutput({ ...errorOutput, [e.target.id]: false });
    }
  };

  const onChangeRating = (e: number) => {
    setInputData({ ...inputData, rating: e });
    if (e) {
      setErrorOutput({ ...errorOutput, rating: false });
    }
  };

  const onClickCreateBtn = async () => {
    if (!inputData.writer) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, writer: true };
      });
    }
    if (!inputData.password) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, password: true };
      });
    }
    if (!inputData.contents) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, contents: true };
      });
    }
    if (!inputData.rating) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, rating: true };
      });
    }
    const { writer, password, contents, rating } = inputData;
    if (writer && password && contents && rating) {
      try {
        await createComment({
          variables: {
            boardId: String(router.query.detail),
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail, page: 1 },
            },
          ],
        });
      } catch (error: any) {
        if (error instanceof Error) FailModal(error.message);
      }
      setInputData({ writer: "", password: "", contents: "", rating: 0 });
    }
  };

  const onClickUpdateBtn = async () => {
    const myUpdateBoardCommentInput: IUpdateBoardCommentInput = {};
    const myVariables: IMyVariables = {
      boardCommentId: comment._id,
      password: inputData.password,
      updateBoardCommentInput: myUpdateBoardCommentInput,
    };

    if (inputData.contents) {
      myVariables.updateBoardCommentInput.contents = inputData.contents;
    } else {
      myVariables.updateBoardCommentInput.contents = comment.contents;
    }
    if (inputData.rating) {
      myVariables.updateBoardCommentInput.rating = inputData.rating;
    } else {
      myVariables.updateBoardCommentInput.rating = comment.rating;
    }

    if (!inputData.password) {
      setErrorOutput({ ...errorOutput, password: true });
      FailModal("비밀번호를 입력하세요.");
    } else {
      try {
        await updateComment({
          variables: myVariables,
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail, page: 1 },
            },
          ],
        });
        onClickIsEditToggle();
      } catch (error) {
        if (error instanceof Error) FailModal(error.message);
      }
    }
  };

  const onClickCancelBtn = () => {
    onClickIsEditToggle();
  };

  return (
    <CommentWritePresenter
      inputData={inputData}
      errorOutput={errorOutput}
      onClickCreateBtn={onClickCreateBtn}
      onClickUpdateBtn={onClickUpdateBtn}
      onClickCancelBtn={onClickCancelBtn}
      onChangeInput={onChangeInput}
      onChangeRating={onChangeRating}
      isEdit={isEdit}
      comment={comment}
    />
  );
}
