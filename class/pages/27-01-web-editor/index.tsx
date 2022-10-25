// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
}); // 성능최적화에도 도움이 됨.

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    // console.log(value);
  };

  const onClickSubmit = async () => {
    // 코드 스플릿팅
    // const qqq = await import("antd");
    // qqq.Modal({ content: "등록 성공!" });
    const { Modal } = await import("antd"); // 리액트에선 이렇게 씀. 가끔 넥스트의 다이나믹 라우팅 안써도 되는 라이브러리는 이렇게 쓰면 됨(리액트 다이나믹 라우팅).
    Modal.success({ content: "등록 성공!" });
  };

  return (
    <div>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      {/* 내용 : <process.browser && ReactQuill onChange={onChangeContents} /> 프리렌더링 시 임폴트 자체가 안되는 라이브러리. 브라우저에서만 임폴트 되게 해야함. -> 다이나믹 임폴트 -> next에서 제공함. 넥스트는 프리렌더링하기 때문에 발생하는 문제라 다이나믹 임폴트가 필요(리액트는 프리랜더링이 없음).*/}
      내용 : <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
