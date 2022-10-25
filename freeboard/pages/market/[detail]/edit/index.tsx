import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketContainer from "../../../../src/component/unit/market/new/marketWrite.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();
  const { data: existingData, loading } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.detail),
    },
  });

  return (
    <MarketContainer
      isEdit={true}
      existingData={existingData}
      loading={loading}
    />
  );
}
