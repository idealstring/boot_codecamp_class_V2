import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const VisitedPageState = atom({
  key: "VisitedPageState",
  default: "",
});
