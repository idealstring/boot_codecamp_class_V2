import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "NanumSquareR, myfont";
    font-weight: 300;
  }

  //   폰트 만든거
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
  @font-face {
    font-family: "NanumSquareR";
    src: url("/fonts/NanumSquareR.ttf");
  }
`;
