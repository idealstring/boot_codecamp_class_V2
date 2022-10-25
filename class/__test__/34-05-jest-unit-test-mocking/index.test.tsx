import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// 가짜 useRouter 만들고, 가짜 push넣어놓기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 mutation 만들기, 요청과 응답 모두.
const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        createBoardInput: {
          writer: "코난",
          title: "안녕하세요",
          contents: "코난입니다",
          password: 1234,
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "백엔드에서_받은_게시글ID",
          writer: "코난",
          title: "안녕하세요",
          contents: "코난입니다",
        },
      },
    },
  },
];

it("API를 mocking해 테스트!!", async () => {
  // 그냥 컴포넌트를 가져오면 아폴로 세팅 안에 있는 컴포넌트가 실행되 백엔드와 통신한다.
  // 여긴 테스트인만큼 목업을 만들고, 이를 마치 통신할 것처럼 속인다.
  // 아폴로에서 제공하는 MockedProvider를 통해서,
  // 테스트할 컴포넌트를 감싼다. 이때 MockedProvider에 mocks={미리만들어놓은테스트목업}을 넣는다.
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  // change 자동으로 바꾸겠다. 즉 컴퓨터가 입력해줌.
  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "코난" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "코난입니다" },
  });

  // TDD => 기능보다 테스트를 먼저 만듬.
  //   fireEvent.change(screen.getByRole("input-address"), {
  //     target: { value: "주소" },
  //   });

  fireEvent.click(screen.getByRole("submit-button"));
  // toHaveBeenCalledWith 진행됐느냐.
  //   expect(푸쉬결과).toHaveBeenCalledWith("boards/게시글ID")
  // 이대로 하면 실제로 업도르 된다. 테스트가 많다면 그것도 일. 그래서 가짜를 만듬.

  // 테스트 대상 컴포넌트가 async를 사용하기 때문에 여기서도 기다리도록 waitFor를 씀.
  await waitFor(() => {
    expect(push).toHaveBeenCalledWith("/boards/백엔드에서_받은_게시글ID");
  });
});
