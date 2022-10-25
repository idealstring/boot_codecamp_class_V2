import { gql } from "@apollo/client";

export const CREATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $useditemQuestionId: ID!
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
  ) {
    createUseditemQuestionAnswer(
      useditemQuestionId: $useditemQuestionId
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const UPDATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
