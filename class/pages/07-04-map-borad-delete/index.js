import { useQuery, useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 20%;
`;

export default function staticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data);

  const onClickDelete = async (e) => {
    await deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        // <Fragment key={el.number}>
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>
            <b>글넘버 :</b> {el.number}
          </Column>
          <Column>
            <b>작성자 :</b> {el.writer}
          </Column>
          <Column>
            <b>제목 :</b> {el.title}
          </Column>
          <Column>
            <b>내용 :</b> {el.contents}
          </Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
        // </Fragment>
      ))}
    </>
  );
}
