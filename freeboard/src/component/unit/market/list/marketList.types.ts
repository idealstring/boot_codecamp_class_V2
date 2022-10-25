import { IQuery } from "../../../../commons/types/generated/types";

export type IMarketListPresenterProps = {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
  recentItems: any;
};
