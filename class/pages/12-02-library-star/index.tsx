// import { UpSquareOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyRate = styled(Rate)`
  color: blue;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  const [starrr, setStarrr] = useState(0);

  // const onClickStar = (vvv: number) => {
  //   setStarrr(vvv);

  //   console.log(vvv);
  // };

  return (
    <>
      <MyRate
        allowHalf
        defaultValue={2.5}
        onChange={(value) => {
          setStarrr(value);
        }}
      />
      {/* 위 아래 같은거. 값이 같을 때 생략 가능해서 이렇게 쉼. */}
      <MyRate allowHalf defaultValue={2.5} onChange={setStarrr} />
    </>
  );
}
