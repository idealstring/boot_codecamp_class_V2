import MarketInquiryWriteContainer from "../../../unit/comment/market/inquiryWrite/inquiryWrite.container";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 400px;
`;

export default function MarektInquiryWrite() {
  return (
    <Container>
      <MarketInquiryWriteContainer
        isEdit={false}
        onClickIsEditToggle={() => null}
      />
    </Container>
  );
}
