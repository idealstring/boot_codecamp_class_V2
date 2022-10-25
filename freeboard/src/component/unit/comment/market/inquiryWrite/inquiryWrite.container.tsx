import MarketInquiryWritePresenter from "./inquiryWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IInquirytWriteContainerProps } from "./inquiryWrite.types";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./inquiryWrite.queries";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { FailModal } from "../../../../commons/modal/commonsModal";

export default function MarketInquiryWriteContainer(
  P: IInquirytWriteContainerProps
) {
  const { isEdit, onClickIsEditToggle, questions } = P;
  const router = useRouter();
  const [createQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);
  const [updateQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);
  const schema = yup.object({
    contents: yup
      .string()
      .required("false")
      .max(100, "질문은 최대 100자까지 가능합니다."),
  });
  const { register, handleSubmit, formState, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCreateBtn = async (data: SubmitHandler<FieldValues>) => {
    try {
      await createQuestion({
        variables: {
          useditemId: String(router.query.detail),
          createUseditemQuestionInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      setValue("contents", "");
    } catch (error: any) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  const onClickUpdateBtn = async (data: SubmitHandler<FieldValues>) => {
    const myVariables: IMutationUpdateUseditemQuestionArgs = {
      useditemQuestionId: questions._id,
      updateUseditemQuestionInput: {
        contents: getValues("contents"),
      },
    };

    if (!localStorage.getItem("accessToken")) {
      CommentFail("로그인 후 이용할 수 있습니다.");
    } else {
      try {
        await updateQuestion({
          variables: myVariables,
          // update(cache) {
          //   cache.modify({
          //     fields: {
          //       fetchUseditemQuestions: (prev) => {
          //         return [...prev];
          //       },
          //     },
          //   });
          // },
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
    <MarketInquiryWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateBtn={onClickCreateBtn}
      onClickUpdateBtn={onClickUpdateBtn}
      onClickCancelBtn={onClickCancelBtn}
      isEdit={isEdit}
      questions={questions}
      getValues={getValues}
    />
  );
}
