import { gql, useQuery } from "@apollo/client";
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
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data?.fetchUserLoggedIn.name);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
    </>
  );
}
