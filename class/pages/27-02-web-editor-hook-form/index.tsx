// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
}); // 성능최적화에도 도움이 됨.

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br><p>" ? "" : value);

    // onChange 되었다고 react-hook-form에 강제로 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async () => {
    const { Modal } = await import("antd"); // 리액트에선 이렇게 씀. 가끔 넥스트의 다이나믹 라우팅 안써도 되는 라이브러리는 이렇게 쓰면 됨(리액트 다이나믹 라우팅).
    Modal.success({ content: "등록 성공!" });
  };

  return (
    <div>
      작성자 : <input type="text" {...register("name")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      {/* register로 할 수 없음... 수동으로 넣어야함. */}
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
