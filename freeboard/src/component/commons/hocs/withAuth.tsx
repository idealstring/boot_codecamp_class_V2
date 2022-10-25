import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WithAuth = (Component: any) => (P: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용할 수 있습니다." });
      router.push("/users/signIn");
    }
  }, []);

  return <Component {...P} />;
};

export default WithAuth;
