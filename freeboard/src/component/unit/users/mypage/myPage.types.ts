import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// presenter

export type IMyPagePresenterProps = {
  fetchPointTransactions: Pick<IQuery, "fetchPointTransactions"> | undefined;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  allCount?: number;
  setPageCount?: Dispatch<SetStateAction<number>>;
};

// style

export type IMyPageStylesProps = {
  // isNormalScreen?: boolean;
  minus?: boolean;
};
