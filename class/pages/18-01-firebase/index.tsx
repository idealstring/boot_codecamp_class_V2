import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../../src/commons/libraries/firebase";

export default function FirebasePage() {
  const [datas, setDatas] = useState<Array>();

  const onClickSubmit = () => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "코난",
      title: "아침에 눈을 뜨면",
      contents: "지난 밤이 궁금해",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data()); // 데이터가 배열로 묶여있어 map으로 뽑아줘야함.

    console.log(result);
    console.log(datas);
    setDatas(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
      {datas?.map((el, i) => (
        <div key={i}>
          <div>{el.writer}</div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
        </div>
      ))}
    </>
  );
}
