import JestUnitTestPage from "../../pages/34-02-jset-unit-test/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // 가상으로 돌려보는 것

it("내가 원하는대로 그려졌는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  const myText1 = screen.getByText("철수는 13살 입니다.");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수 취미 입력하기 :");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
