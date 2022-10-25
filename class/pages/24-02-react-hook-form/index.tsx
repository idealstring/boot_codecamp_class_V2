import { useForm } from "react-hook-form";

type IFromData = {
  writer: string;
  title: string;
  contents: string;
};

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm<IFromData>();

  const onClickSubmit = (data: IFromData) => {
    console.log(data, data.writer, data.title, data.contents);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} />
        제목 : <input type="text" {...register("title")} />
        내용 : <input type="text" {...register("contents")} />
        {/* 주소 : <input type="text" {...register("Address.Detail")} /> */}
        <button>나만의 타입</button>
      </form>
    </>
  );
}

/* 
<button type="submit">등록하기</button> // 기본값! 주의!
<button type="reset">지우기</button>
<button type="button">나만의 타입</button> -> 폼 안에서는 꼭 버튼 선언 후 onClick해야 이전처럼 사용가능.
*/
