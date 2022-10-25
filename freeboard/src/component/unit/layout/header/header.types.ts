import { IQuery } from "../../../../commons/types/generated/types";

export type IHeaderProps = {
  onClickIsNav: () => void;
};

// container

export type IHeaderContainerProps = {
  onClickIsNav: () => void;
};

// presenter

export type IHeaderPresenterProps = {
  onClickIsNav: () => void;
  IPickItemData: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
};
