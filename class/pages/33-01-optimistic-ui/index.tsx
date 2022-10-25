import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  useEffect(() => {}, []);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "634eef5f6cf469002995d589" } }
  );
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: {
        boardId: "634eef5f6cf469002995d589",
      },
      //   첫번째 방법, 단, 두번 날아가서 아쉬움.
      //   refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: "" } }],
      //
      // 두번째 방법, 캐시를 수정해 그나마 나음.
      //   update(cache, { data }) {
      //     // cache.modify({ // 수정만 가능.
      //     cache.writeQuery({
      //       // 없던 값도 추가할 수 있음.
      //       query: FETCH_BOARD,
      //       variables: { boardId: "" },
      //       data: {
      //         // 기존에 useQuery로 받아오던 그 부분 data.fetchBoard.likeCount와 같음.
      //         fetchBoard: {
      //           _id: "",
      //           __typename: "Board",
      //           likeCount: data?.likeBoard,
      //         },
      //       },
      //     });
      //   },
      //
      // 세번째 방법 optimistic UI, 두번째 방법과 함께 사용함.
      optimisticResponse: {
        // api 요청을 하지만, 일단 먼저 카운트를 올림
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "634eef5f6cf469002995d589" },
          data: {
            fetchBoard: {
              _id: "634eef5f6cf469002995d589",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요</button>
    </>
  );
}
