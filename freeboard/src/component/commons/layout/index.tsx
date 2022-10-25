import { useRouter } from "next/router";
import { useContext, useState } from "react";
import ProfileContainer from "../profile/profile.container";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import * as S from "../../unit/layout/layout.styles";
import { WindowSizeContext } from "../responsive";

type ILayoutP = {
  children: JSX.Element;
};

export default function Layout(props: ILayoutP) {
  const [isNav, setIsNav] = useState(false);
  const router = useRouter();
  const { isNormalScreen } = useContext(WindowSizeContext);

  const onClickIsNav = () => {
    setIsNav((isNav) => !isNav);
  };

  const SHOW_NAVIGATIONS = [
    "/users/mypage",
    "/users/mypage/basket",
    "/users/mypage/charge",
    "/users/mypage/sales",
    "/users/mypage/bought",
    "/users/mypage/edit",
    "/users/mypage/edit/password",
  ];

  const isShowMyPage = SHOW_NAVIGATIONS.includes(router.asPath);

  return (
    <>
      <Header onClickIsNav={onClickIsNav} />
      <Navigation isNav={isNav} />
      {isShowMyPage && (
        <S.Container isNormalScreen={isNormalScreen}>
          <ProfileContainer />
          <S.ContentsWrapper isNormalScreen={isNormalScreen}>
            {props.children}
          </S.ContentsWrapper>
        </S.Container>
      )}
      {!isShowMyPage && <div>{props.children}</div>}
      <Footer />
    </>
  );
}
