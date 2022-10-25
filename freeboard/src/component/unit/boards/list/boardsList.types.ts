import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export type IBoardListPresenterProps = {
  fetchBoardsOfTheBestDate?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  onClickToWrite: () => void;
  onClickDateOpen: () => void;
  isDateOpen: boolean;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardsCount: number;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDatePicker: (_: any, dateString: [string, string]) => void;
};
