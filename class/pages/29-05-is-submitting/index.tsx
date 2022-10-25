import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IsSubmittingPage() {
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>("");

  const { formState } = useForm();
  formState.isSubmitting;

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setMyData(result);

    setIsSubmitting(false);
  };
  return (
    <div>
      <button onClick={onClickSubmit} disabled={IsSubmitting}>
        등록하기 등의 API 요청버튼
      </button>
    </div>
  );
}
