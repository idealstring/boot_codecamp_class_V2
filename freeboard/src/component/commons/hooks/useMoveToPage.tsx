import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { VisitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(VisitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path);
    void router.push(path);
  };

  return { onClickMoveToPage, visitedPage };
}
