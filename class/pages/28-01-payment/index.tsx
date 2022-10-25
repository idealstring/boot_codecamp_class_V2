import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp26283783"); // Example: imp00000000
    console.log(IMP.init.request_pay);

    IMP.request_pay(
      {
        // param
        pg: "nice", // pg사
        pay_method: "card", // vbank 등
        // merchant_uid: "ORD20180131-0000011", // 상품 아이디. 중복 안됨. 안쓰면 자동으로 만들어짐.
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-1-payment", // 모바일의 경우 결제 시 페이지가 완전히 이동되므로, 다시 되돌아오는 명령이 필요하다.
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          //   const paymentDate = new Date(); // 프론트엔드에서 시간을 만드는 것은 안됨.

          // 백엔드에 결제 관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading <- backend09의 경우.
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패! 다시 시도 바랍니다.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
