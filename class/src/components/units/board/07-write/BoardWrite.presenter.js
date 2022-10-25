// import asdf, { BlueInput, RedInput } from "../write/BoardWrite.styles";
import * as S from "../07-write/BoardWrite.styles";
console.log(S.asdf);

export default function BoardWriteUI(props) {
  return (
    <>
      <label>작성자 : </label>
      <S.RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      <label>제목 : </label>
      <S.RedInput type="text" onChange={props.onChangeTitle} />
      <br />
      <label>내용 : </label>
      <S.RedInput type="text" onChange={props.onChangeContents} /> <br />
      <S.BlueInput
        onClick={props.onClickSubmit}
        color={props.mycolor}
        fz="30px"
        fw="700"
      >
        Graphql API 요청하기(동기)
      </S.BlueInput>
    </>
  );
}
