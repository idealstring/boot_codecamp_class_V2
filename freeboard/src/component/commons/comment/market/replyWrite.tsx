import ReplayWriteContainer from "../../../unit/comment/market/replyWrite/replyWrite.container";

type IMarektReplyWriteProps = { questionsId: string };

export default function MarektReplyWrite(P: IMarektReplyWriteProps) {
  const { questionsId } = P;
  return (
    <ReplayWriteContainer
      isEdit={false}
      onClickIsEditToggle={() => null}
      questionsId={questionsId}
    />
  );
}
