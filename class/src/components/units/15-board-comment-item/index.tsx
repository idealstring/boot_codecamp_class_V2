import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

type IBoardCommentItemProps = {
  el: IBoard;
};

export default function BoardCommentItem(P: IBoardCommentItemProps) {
  const { el } = P;
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {!isEdit && (
        <div>
          <Row>
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <button onClick={onClickEdit}>수정하기</button>
          </Row>
          <br />
        </div>
      )}

      {isEdit && (
        <div>
          <input />
        </div>
      )}
    </div>
  );
}
