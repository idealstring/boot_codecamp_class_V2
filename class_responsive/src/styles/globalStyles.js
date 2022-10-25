import { css } from "@emotion/react";

export const GlobalStyles = css`
  body[data-theme="light"] {
    //light 테마
    --primary-color: #06c;
    --bg-color: white;
  }

  body[data-theme="dark"] {
    //dark 테마
    --primary-color: white;
    --bg-color: #06c;
  }
`;
