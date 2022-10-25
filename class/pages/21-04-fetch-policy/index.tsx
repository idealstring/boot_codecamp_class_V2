import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  const onClickMove = () => {
    void router.push("/21-05-fetch-policy-moved");
  };

  return (
    <>
      <div>
        <button onClick={onClickIsOpen}>
          버튼 클릭 시 새로운 컴포넌트 등장
        </button>
        {isOpen && <FetchPolicyExample />}
        <button onClick={onClickMove}>페이지 이동</button>
      </div>
    </>
  );
}
