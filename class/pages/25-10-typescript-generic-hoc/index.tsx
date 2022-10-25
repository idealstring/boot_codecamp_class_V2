import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();
  useEffect(() => {
    // useEffect로 만듬.
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능!");
      void router.push("/23-08-login-check-hoc");
    }
  }, []);

  return <Component {...props} />;
};
