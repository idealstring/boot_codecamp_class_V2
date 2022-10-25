import MarketInquiryList from "../../../src/component/commons/comment/market/InquiryList";
import MarektInquiryWrite from "../../../src/component/commons/comment/market/inquiryWrite";
import MarketDetailContainer from "../../../src/component/unit/market/detail/marketDetail.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetailContainer />
      <MarektInquiryWrite />
      <MarketInquiryList />
    </>
  );
}
