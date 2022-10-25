import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
  const router = useRouter();

  // 로그인 여부는 로컬스토리지로 확인함.
  useEffect(() => {
    // useEffect로 만듬.
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능!");
      void router.push("/23-03-login-check");
    }
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
    </>
  );
}
