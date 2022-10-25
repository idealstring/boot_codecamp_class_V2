import { IQuery } from "../../../commons/types/generated/types";

// presenter
export type IProfilePresenterProps = {
  fetchLoggedData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickLogOut: () => void;
};

// style

export type IProfileStylesProps = {
  isNormalScreen?: boolean;
};
