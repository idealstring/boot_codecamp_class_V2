// container

import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export type IPaginationProps = {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardsCount: number;
};

// presenter
export type IPaginationPresenterProps = {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (e: MouseEvent<HTMLButtonElement>) => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
};

// styles

export type IActiveProps = {
  active: boolean;
};
