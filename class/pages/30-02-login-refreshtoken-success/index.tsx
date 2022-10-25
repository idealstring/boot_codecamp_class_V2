import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export default function LoginSuccessPage() {
  // 1. useQuery : 페이지 접속하면 자동으로 data에 받아지고 리렌더링.
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. useLazyQuery : 버튼 클릭 시 직접 실행하면 data에 받아지고 리렌더링.
  // const [myquery, { data }] = useLazyQuery();

  // 3. useApolloClient: axios와 동일
  // const client = useApolloClient();

  const client = useApolloClient();

  const onClickBtn = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickBtn}>클릭하세요</button>
      {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div> */}
    </>
  );
}
