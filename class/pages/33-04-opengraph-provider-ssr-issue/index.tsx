// 제공자일 때 => 네이버(제공자)
import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: "634e8ddc6cf469002995d478",
    },
  });

  return (
    <div>
      <Head>
        <meta property="op:title" content={props?.qqq.name} />
        <meta property="op:description" content={props?.qqq.remarks} />
        <meta property="op:img" content={props?.qqq.images?.[0]} />
        <meta property="op:url" content="홈페이지주소" />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다~~~</div>
      <div>요긴 바디라 미리보기와 상관없지롱!</div>
    </div>
  );
}

// getServerSideProps이란 이름은 바꿀 수 없음. 페이지에서만 적용 가능. 아폴로에서 자동으로 읽는 제목임. 웹팩 프론트엔드서버에서만 실행됨.
export const getServerSideProps = async () => {
  // 1. 여기서 API 요청
  console.log("여기는 서버입니다.");

  // 아폴로 세팅이 그려지기 전이므로 grapaql-request를 이용함.
  const graphGlClient = new GraphQLClient(
    "http://backend09.codebootcamp.co.kr/graphql"
  );

  const result = await graphGlClient.request(FETCH_USEDITEM, {
    useditemId: "634e8ddc6cf469002995d478",
  });

  // 2. 밭은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
