import CommentList from "../../../src/component/commons/comment/board/commentList";
import CommentWrite from "../../../src/component/commons/comment/board/commentWrite";
import BoardDetailContainer from "../../../src/component/unit/boards/detail/boardsDetail.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetailContainer />
      <CommentWrite />
      <CommentList />
    </>
  );
}
