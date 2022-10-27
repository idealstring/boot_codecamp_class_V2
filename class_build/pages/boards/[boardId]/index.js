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

export const getSeverSidePorps = () => {
  // 만약 서버사이드 렌더링한다면? => out 폴더로 생성 불가. / next.config.js에서 exportPathMap으로 현재페이지 제외시키기.
};
