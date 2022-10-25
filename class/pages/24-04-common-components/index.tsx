import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("비밀번호를 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  password: yup.string().required("비밀번호를을 입력해주세요."),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일은 필수 입력입니다."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
  //   .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
  //   .required("비밀번호는 필수 입력입니다."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다.")
  //   .required("휴대폰은 필수 입력입니다."),
});

type IFromData = {
  writer: string;
  title: string;
  contents: string;
  password: string;
};

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFromData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFromData) => {
    console.log(data, data.writer, data.title, data.contents);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <Input01 type="text" register={register("writer")} />
        <div>{formState.errors.writer?.message}</div>
        제목 : <Input01 type="text" register={register("title")} />
        <div>{formState.errors.title?.message}</div>
        내용 : <Input01 type="text" register={register("contents")} />
        <div>{formState.errors.contents?.message}</div>
        비밀번호 : <Input01 type="password" register={register("password")} />
        <div>{formState.errors.password?.message}</div>
        {/* 주소 : <input type="text" {...register("Address.Detail")} /> */}
        <Button01 title="등록하기" isActive={formState.isValid} />
      </form>
    </>
  );
}

/* 
<button type="submit">등록하기</button> // 기본값! 주의!
<button type="reset">지우기</button>
<button type="button">나만의 타입</button> -> 폼 안에서는 꼭 버튼 선언 후 onClick해야 이전처럼 사용가능.
*/
