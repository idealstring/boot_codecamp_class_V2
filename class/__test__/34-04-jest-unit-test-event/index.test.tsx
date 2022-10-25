import { fireEvent, render, screen } from "@testing-library/react";
import CounterStatePage from "../../pages/34-04-jest-unit-test-event";
import "@testing-library/jest-dom";

it("버튼을 눌렀을 때 제대로 작동하는 지 테스트하자!", () => {
  render(<CounterStatePage />);

  fireEvent.click(screen.getByRole("count-button"));

  // 0에서 1됐을 테니.
  expect(screen.getByRole("count")).toHaveTextContent("1");
  // toHaveTextContent는 바뀔 껄 예상하고..!
});
