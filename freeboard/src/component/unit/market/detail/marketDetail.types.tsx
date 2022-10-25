import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

// presenter

export type IMarketDetailPresenterProps = {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  fetchUserData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onClickBasket?: () => Promise<void>;
  IPicked: IUseditem[] | undefined;
};

// style

export type IMarketDetailStylesProps = {
  isMobile?: boolean;
  IPicked?: IUseditem[] | undefined;
};
