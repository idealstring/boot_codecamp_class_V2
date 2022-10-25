import CommentWriteContainer from "../../../unit/comment/board/commentWrite/commentWrite.container";

export default function CommentUpdate() {
  return (
    <CommentWriteContainer isEdit={true} onClickIsEditToggle={() => null} />
  );
}
