import { IQuery } from "../../../commons/types/generated/types";

export type IIndexPresenterProps = {
  fetchUseditemsToday: Pick<IQuery, "fetchUseditems"> | undefined;
  fetchUseditemsBest: Pick<IQuery, "fetchUseditems"> | undefined;
  onClickMore: () => void;
};
