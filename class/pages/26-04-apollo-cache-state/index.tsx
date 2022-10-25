import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function staticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (event) => {
    void deleteBoard({
      variables: {
        boardId: event.target.id,
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        // { data }는 구조분해할당으로 받은 것. 아닐 경우 아래서 보면됨.
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // readField 여기서 아이디를 꺼내와야함.
              const deletedId = data.deleteBoard; // 삭제된 ID를 반환받음.
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로, readField를 사용해서 꺼내와야함.
              );
              return [...filteredPrev]; // 삭제된 아이디를 제외한 나머지를 뿌림.
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕",
          contents: "하세요",
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, qqq) {
        // { data }는 구조분해할당 하지 않을 경우 이렇게 함.
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [qqq.data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Row>
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <Column>내용 : {el.contents}</Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Row>
          <br />
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
