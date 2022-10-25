import * as S from "../09-write/BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <label>작성자 : </label>
      <input
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      <label>제목 : </label>
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      <label>내용 : </label>
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />{" "}
      <br />
      <S.BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        color={props.mycolor}
        fz="30px"
        fw="700"
      >
        {props.isEdit ? "수정완료" : "생성하기"}
      </S.BlueButton>
    </>
  );
}
