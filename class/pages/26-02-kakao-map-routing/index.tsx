import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPageRouting() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    void router.push("/26-03-kakao-map-routed");
  };

  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로이동하기</button> */}
      {/* <a href="/26-03-kakao-map-routed">맵으로 이동하기</a> // 새로고침됨. CSR이 안됨 */}
      {/* <Link href="/26-03-kakao-map-routed">맵으로 이동하기</Link> */}
      {/* // Link는 CSR이됨. */}
      {/* 그러나, link를 사용할 땐 아래처럼 쓰길 권장한다. */}
      <Link href="/26-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>{" "}
      {/* 엘레멘트에서 보면 해당 태그가 없어지기때문. 검색엔진들은 해당 페이지를 태그로 검색하고 페이징한다. SEO 검색엔진 최적화를 위해서임. */}
      {/* 따라서 link를 쓰는게 좋다. */}
      {/* 다만, 1. 버튼으로 이동하는 게 아닌 경우 제외(서버에서 값 받아온 후 자동으로 페이지 넘길 때) */}
      {/* 2. 클릭 시 추가 로직을 실행 시키고 싶은 경우(함수 등 다른 작업할 때) */}
      {/* 결론. 클릭 시 단순 페이지 이동일 때는 Link 사용. 아니면 전부 router 사용 */}
    </>
  );
}
