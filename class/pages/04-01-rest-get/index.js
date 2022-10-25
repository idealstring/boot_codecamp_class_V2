import { useState } from "react";
import axios from "axios";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  //   const onClickAsync = async () => {};
  async function onClickSync() {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data);
    console.log(result.data.title);
    setTitle(result.data.title);
  }

  return (
    <div>
      <button onClick={onClickAsync}>REST-API 요청하기(비동기)</button>
      <button onClick={onClickSync}>REST-API 요청하기(동기)</button>
      <div>{title}</div>
    </div>
  );
}
