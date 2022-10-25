module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", // 상단에 import React 선언하는 거 off
    "@typescript-eslint/explicit-function-return-type": "off", // 함수 반환값 끌지 말지, 컴포넌트는 대부분 JSX.Element일테니까.
    "@typescript-eslint/strict-boolean-expressions": "off", // 조건에서 boolean모두 쓸지 말지.  if(writer!===")
    "@typescript-eslint/no-misused-promises": "off", // 프로미스객체.  ()=>Promise<void> {()=>props.onClickWrite} 해제
    "@typescript-eslint/triple-slash-reference": "off", // 슬래시 3개를 쓰지 말라는 것인데, next-env-d.ts라는 nextjs 기본설정에서 쓰기 때문에 제외 시키는 것.
    "@typescript-eslint/consistent-type-definitions": ["type"], // type 강제
    "@typescript-eslint/prefer-nullish-coalescing": ["true", "true", "true"],
  },
};
