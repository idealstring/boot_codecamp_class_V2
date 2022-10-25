import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;
// class/src/components/commons/hocs 참고

function LoginSuccessPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
    </>
  );
}
export default withAuth(LoginSuccessPage);
