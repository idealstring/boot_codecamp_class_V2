import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능!");
      void router.push("/23-08-login-check-hoc");
    }
  }, []);
}
