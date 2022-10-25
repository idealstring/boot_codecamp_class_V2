import Head from "next/head";

// 제공자일 때 => 네이버(제공자)
export default function OpengraphProviderPage() {
  return (
    <div>
      <Head>
        <meta property="op:title" content="중고마켓" />
        <meta
          property="op:description"
          content="나의 중고마켓에 오신 걸 환영합니다."
        />
        <meta property="op:img" content="이미지주소" />
        <meta property="op:url" content="홈페이지주소" />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다~~~</div>
      <div>요긴 바디라 미리보기와 상관없지롱!</div>
    </div>
  );
}
