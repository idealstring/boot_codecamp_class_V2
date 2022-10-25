// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
}); // 성능최적화에도 도움이 됨.

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
    defaultValues: {
      writer: "",
      password: "",
      contents: "",
      title: "",
    },
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br><p>" ? "" : value);

    // onChange 되었다고 react-hook-form에 강제로 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    const { Modal } = await import("antd");
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...data,
        },
      },
    });

    Modal.success({ content: "등록 성공!" });
    if (typeof result.data.createBoard._id !== "string") return;
    void router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      {/* register로 할 수 없음... 수동으로 넣어야함. */}
      <br />
      <button type="submit">등록하기</button>
    </form>
  );
}
