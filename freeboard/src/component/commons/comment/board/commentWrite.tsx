import CommentWriteContainer from "../../../unit/comment/board/commentWrite/commentWrite.container";
// import { ICommentWriteProps } from "../../../component/unit/comment/commentWrite/commentWrite.types";

export default function CommentWrite() {
  return (
    <CommentWriteContainer isEdit={false} onClickIsEditToggle={() => null} />
  );
}
// export default function CommentWrite(P: ICommentWriteProps) {
//   const { setIsEdit, isEdit } = P;
//   return <CommentWriteContainer isEdit={isEdit} setIsEdit={setIsEdit} />;
// }
