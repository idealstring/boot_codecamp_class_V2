import MarketInquiryWriteContainer from "../../../unit/comment/market/inquiryWrite/inquiryWrite.container";

export default function MarketInquiryUpdate() {
  return (
    <MarketInquiryWriteContainer
      isEdit={true}
      onClickIsEditToggle={() => null}
    />
  );
}
