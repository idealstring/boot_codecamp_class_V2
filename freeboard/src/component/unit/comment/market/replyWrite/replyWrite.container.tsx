import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./replyWrite.quries";
import { IReplayWriteContainerProps } from "./replyWrite.types";
import ReplayWritePresenter from "./replyWrite.presenter";
import { FailModal } from "../../../../commons/modal/commonsModal";

export default function ReplayWriteContainer(P: IReplayWriteContainerProps) {
  const { questionsId, Answers, isEdit, onClickIsEditToggle } = P;
  const [createQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);
  const [updateQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);
  const { register, handleSubmit, formState, setValue } = useForm();

  const onClickCancelBtn = () => {
    if (onClickIsEditToggle) onClickIsEditToggle();
  };

  const onClickCreateAnswer = async (data: any) => {
    try {
      await createQuestionAnswer({
        variables: {
          useditemQuestionId: String(questionsId),
          createUseditemQuestionAnswerInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [...prev, data?.createUseditemQuestionAnswer];
              },
            },
          });
        },
      });
      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickUpdateAnswer = async (data: any) => {
    try {
      await updateQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(Answers?._id),
          updateUseditemQuestionAnswerInput: {
            ...data,
          },
        },
        // update(cache) {
        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestionAnswers: (prev) => {
        //         return [...prev];
        //       },
        //     },
        //   });
        // },
      });
      if (onClickIsEditToggle) onClickIsEditToggle();
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  return (
    <>
      <ReplayWritePresenter
        onClickCreateAnswer={onClickCreateAnswer}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        Answers={Answers}
        isEdit={isEdit}
        onClickCancelBtn={onClickCancelBtn}
        onClickUpdateAnswer={onClickUpdateAnswer}
      />
    </>
  );
}
