import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
  const [searchWord, setSearchWord] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(e.currentTarget.id) }); // 검색 입력 시 그다음 페이지네이션은 자동으로 남아 여기에 search를 굳이 쓰지 않아도 됨.
  };

  const onClickSearch = () => {
    void refetch({
      search: searchWord,
      page: 1,
    });
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <>
      <div>
        <label>검색어입력 : </label>
        <input type="text" onChange={onChangeSearch} />
        <button onClick={onClickSearch}>검색</button>
      </div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Row>
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <Column>내용 : {el.contents}</Column>
          </Row>
          <br />
        </div>
      ))}
      {new Array(10).fill(1).map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickPage}>
          {i + 1} |
        </span>
      ))}
    </>
  );
}
