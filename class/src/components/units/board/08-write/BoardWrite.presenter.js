import * as S from "../08-write/BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <label>작성자 : </label>
      <input type="text" onChange={props.onChangeWriter} />
      <br />
      <label>제목 : </label>
      <input type="text" onChange={props.onChangeTitle} />
      <br />
      <label>내용 : </label>
      <input type="text" onChange={props.onChangeContents} /> <br />
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
