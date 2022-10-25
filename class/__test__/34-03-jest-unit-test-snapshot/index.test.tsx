import { render } from "@testing-library/react";
import JestUnitTestPage from "../../pages/34-03-jset-unit-test-snapshot";

it("기존 사진이랑 바뀐게 없는 지 비교해보자! - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
  // container 렌더링한 결과
  // toMatchSnapshot 기존 사진과 비교하겠다. 기존 사진이 없으면 먼저 찍음. 있을 때 비교.
});
