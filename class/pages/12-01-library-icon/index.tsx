import { UpSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(UpSquareOutlined)`
  color: blue;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  return (
    <>
      <MyIcon />
      {/* 이런 아이콘은 id를 생으로 입력할 수 없다. span > svg > path 단위로 변환되기 때문.  */}
      {/* id 지정하면 span에 id가 지정되어 있다. 따라서 다이렉트로하기보다 상위에 태그를 하나 더 감싸서 움직이는게 나을 지도! */}
    </>
  );
}
