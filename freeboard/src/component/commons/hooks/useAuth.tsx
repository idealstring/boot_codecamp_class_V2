import { Modal } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용할 수 있습니다." });
      void router.push("/users/signIn");
    }
  }, []);
}
