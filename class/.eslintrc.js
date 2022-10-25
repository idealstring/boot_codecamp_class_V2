module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "./class/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest/globals"],
  rules: {
    "react/react-in-jsx-scope": "off", // 상단에 import React 선언하는 거 off
    "@typescript-eslint/explicit-function-return-type": "off", // 함수 반환값 끌지 말지, 컴포넌트는 대부분 JSX.Element일테니까. 다만, 필요한 부분이 있을 수 있다.
    "@typescript-eslint/strict-boolean-expressions": "off", // 조건에서 boolean모두 쓸지 말지. if(writer) 이 친구를 if(writer!===") 이렇게 써야만한다. 다만 이럴경우 타입스크립트에서 오류가 나올지도..
    "@typescript-eslint/no-misused-promises": "off", // 프로미스객체. 1. async-await가 있을 경우 타입을 ()=>Promise<void> 를 써야 하는데, 반복될 수 있으니 off하기도. 2. 프롭스로 날렸다면?! 프로미스를 반환하지 않기 때문에 오류가 날 수 있다. 이럴경우 한번 더 함수로 감싸서{()=>props.onClickWrite} 다른 타입을 넣어주어야한다. 번거롭기때문에 off 하기도.
    "@typescript-eslint/triple-slash-reference": "off", // 슬래시 3개를 쓰지 말라는 것인데, next-env-d.ts라는 nextjs 기본설정에서 쓰기 때문에 제외 시키는 것.
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/array-type": "off",
    "react/display-name": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
  },
};
