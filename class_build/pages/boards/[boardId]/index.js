import { useRouter } from "next/router";

export default function BoardsIdPage() {
  const router = useRouter();

  return (
    <div>
      안녕하세요. 상세페이지입니다. <br />
      여기는 동적페이지입니다.
      <br />
      게시글 아이디 : {router.query.boardId}
    </div>
  );
}
