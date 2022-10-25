import { useRouter } from "next/router";
import ProfilePresenter from "./profile.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./profile.quries";
import useAuth from "../hooks/useAuth";

function ProfileContainer() {
  useAuth();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();

  const onClickLogOut = () => {
    logoutUser();
    localStorage.removeItem("accessToken");
    router.reload();
  };

  return (
    <>
      <ProfilePresenter
        fetchLoggedData={fetchLoggedData}
        onClickLogOut={onClickLogOut}
      />
    </>
  );
}

export default ProfileContainer;
