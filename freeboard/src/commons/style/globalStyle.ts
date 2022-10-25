import { css } from "@emotion/react";
import { StyleSet } from "./styleSet";

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0 auto;
    font-family: NanumSquareNeo, NanumSquare_acR, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  .ant-btn-primary {
    border-color: ${StyleSet.colors.point01};
    background: ${StyleSet.colors.point01};
  }

  .ant-btn-dangerous {
    color: ${StyleSet.colors.point03};
    border-color: ${StyleSet.colors.point03};
  }

  .ant-rate {
    color: ${StyleSet.colors.point01};
  }

  .ant-picker {
    width: 360px;
    height: 48px;
    border: none;
    border-radius: 0px;
    background-color: ${StyleSet.colors.lightGray01};
    input {
      padding-left: 35px;
    }
    .ant-picker-active-bar {
      background-color: ${StyleSet.colors.point01};
    }
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background-color: ${StyleSet.colors.point01};
  }

  .toastui-editor-contents > div {
    font-family: NanumSquareNeo, NanumSquare_acR, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
  }

  @media (prefers-color-scheme: light) {
    html {
      color-scheme: light;
    }
    body {
      color: ${StyleSet.colors.black};
      background: ${StyleSet.colors.backgroundWhite};
    }

    h1,
    h2,
    h3 {
      color: ${StyleSet.colors.black};
    }

    svg g {
      fill: ${StyleSet.colors.black};
    }

    .grayMutation {
      background-color: ${StyleSet.colors.lightGray01};
    }

    .ListContent:hover {
      background-color: ${StyleSet.colors.lightGray01};
    }

    #BestBoard {
      background-color: ${StyleSet.colors.white};
      // box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.2);
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: ${StyleSet.colors.white};
      background: ${StyleSet.colors.backgroundBlack};
    }

    h1,
    h2,
    h3 {
      color: ${StyleSet.colors.white};
    }

    svg g {
      fill: ${StyleSet.colors.white};
    }

    .grayMutation {
      background-color: ${StyleSet.colors.black};
    }

    .ListContent:hover {
      background-color: ${StyleSet.colors.gray};
    }
    .ant-btn {
      background: none;
      color: ${StyleSet.colors.white};
      &.ant-btn-dangerous {
        color: ${StyleSet.colors.point03};
        border-color: ${StyleSet.colors.point03};
      }
    }
    .ant-modal-header {
      background-color: ${StyleSet.colors.backgroundBlack};
      border-bottom: 1px solid ${StyleSet.colors.backgroundWhite};
    }

    .ant-modal-title {
      color: ${StyleSet.colors.backgroundWhite};
    }

    .ant-modal-content {
      color: ${StyleSet.colors.backgroundWhite};
      background-color: ${StyleSet.colors.backgroundBlack};
    }
    .ant-modal-confirm-body .ant-modal-content input {
      :: placeholder {
        color: ${StyleSet.colors.white};
      }
    }

    .ant-modal-confirm-body .ant-modal-confirm-title,
    .ant-modal-confirm-body .ant-modal-confirm-content {
      color: ${StyleSet.colors.white};
    }

    .ant-modal-confirm-content {
      color: ${StyleSet.colors.backgroundWhite};
    }

    .ant-modal-footer {
      border-top: 1px solid ${StyleSet.colors.backgroundWhite};
    }

    .ant-picker {
      input {
        color: ${StyleSet.colors.white};
      }
      background-color: ${StyleSet.colors.black};
      svg {
        fill: ${StyleSet.colors.white};
      }
    }
    .ant-picker-suffix {
      svg {
        fill: ${StyleSet.colors.white};
      }
    }

    #BestBoard {
      background-color: ${StyleSet.colors.backgroundBlack};
      // box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.2);
    }
  }

  @font-face {
    font-family: "NanumSquare_acR";
    src: url("/fonts/NanumSquare_acR.ttf");
  }

  @font-face {
    font-family: "NanumSquare_acB";
    src: url("/fonts/NanumSquare_acB.ttf");
  }

  @font-face {
    font-family: "NanumSquare_acEB";
    src: url("/fonts/NanumSquare_acEB.ttf");
  }

  @font-face {
    font-family: "NanumSquareNeo";
    src: url("/fonts/NanumSquareNeo-Variable.woff2");
  }
`;
