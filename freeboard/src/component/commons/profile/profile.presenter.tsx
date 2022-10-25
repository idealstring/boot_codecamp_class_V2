import { useContext } from "react";
import * as S from "./profile.styles";
import { WindowSizeContext } from "../responsive";
import { IProfilePresenterProps } from "./profile.types";
import { useMoveToPage } from "../hooks/useMoveToPage";

export default function ProfilePresenter(P: IProfilePresenterProps) {
  const { fetchLoggedData, onClickLogOut } = P;
  const { isNormalScreen } = useContext(WindowSizeContext);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.ProfileWrapper isNormalScreen={isNormalScreen}>
      <S.ProfileTop isNormalScreen={isNormalScreen}>
        {fetchLoggedData?.fetchUserLoggedIn.picture ? (
          <S.ProfileImg
            src={`https://storage.googleapis.com/${fetchLoggedData?.fetchUserLoggedIn.picture}`}
          />
        ) : (
          <svg
            width="120"
            height="120"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
              fill="#BDBDBD"
            />
          </svg>
        )}
        <S.NicknameWrapper isNormalScreen={isNormalScreen}>
          <span>{fetchLoggedData?.fetchUserLoggedIn.name}</span>
          <S.BtnWrapper isNormalScreen={isNormalScreen}>
            <S.EditButton onClick={onClickMoveToPage("/users/mypage/edit")}>
              설정
            </S.EditButton>
            <S.LogoutBtn onClick={onClickLogOut}>로그아웃</S.LogoutBtn>
          </S.BtnWrapper>
        </S.NicknameWrapper>
      </S.ProfileTop>
      <S.ProfileBottom>
        <S.BottomButton onClick={onClickMoveToPage("/users/mypage/basket")}>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M430.8 877.1h-0.33c-47.77-0.18-86.61-39.18-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.01-0.05 1.48-0.05 47.75 0.52 86.32 39.8 85.97 87.55-0.34 47.64-39.29 86.29-86.9 86.29z m0.37-140.6c-29.69 0-53.93 24.06-54.1 53.78-0.02 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.03-54.1-0.34 0.02-0.68 0.05-1.02 0.03h-0.31zM741.08 877.1h-0.33c-47.74-0.18-86.59-39.16-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.04-0.05 1.48-0.05 47.76 0.52 86.32 39.8 85.98 87.55-0.35 47.64-39.31 86.29-86.91 86.29z m0.36-140.6c-29.69 0-53.93 24.06-54.1 53.78 0 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.04-54.1-0.34 0.02-0.71 0.05-1.02 0.03h-0.3zM373.15 666.52h-39.8c-5.83 0-11.04-3.03-14.01-7.7-2.11-2.74-3.37-6.09-3.37-9.72v-2.9l-55.54-466.11H80.59c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h194.57c8.4 0 15.48 6.29 16.48 14.63l56.22 471.8h20.34c1.54-0.53 3.15-0.83 4.8-0.83h459.27l94.9-444.21c1.92-8.96 10.74-14.78 19.7-12.75 8.96 1.91 14.67 10.73 12.76 19.69l-97.51 456.41c-1.34 6.29-6.15 11.1-12.16 12.62-1.98 0.91-4.14 1.43-6.42 1.43h-465.6c-1.53 0.53-3.14 0.82-4.79 0.82z" />
            <path d="M917.71 319.87H316.15c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h601.56c9.16 0 16.59 7.42 16.59 16.59s-7.42 16.59-16.59 16.59z" />
          </svg>
          <span>내 장터</span>
        </S.BottomButton>
        <S.BottomButton onClick={onClickMoveToPage("/users/mypage")}>
          <svg
            width={31}
            height={31}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M929.171 696.364C928.371 821.492 737.683 927.071 512 927.071S95.629 821.492 94.829 696.364c-9.836-8.606-19.062-17.523-27.646-26.753C65.757 678.155 65 686.823 65 695.585 65 841.091 265.131 959 512 959c246.868 0 447-117.909 447-263.415 0-8.762-0.757-17.43-2.183-25.974C948.232 678.841 939.007 687.758 929.171 696.364z" />
            <path d="M929.171 520.754C928.371 645.883 737.683 751.461 512 751.461S95.629 645.883 94.829 520.754c-9.836-8.605-19.062-17.523-27.646-26.753C65.757 502.544 65 511.213 65 519.976c0 145.504 200.131 263.415 447 263.415 246.868 0 447-117.911 447-263.415 0-8.763-0.757-17.432-2.183-25.975C948.232 503.23 939.007 512.148 929.171 520.754z" />
            <path d="M512 591.815c246.868 0 447-117.91 447-263.416C959 182.941 758.868 65 512 65 265.131 65 65 182.941 65 328.4 65 473.905 265.131 591.815 512 591.815zM512 96.929c226.148 0 417.2 106 417.2 231.471 0 125.472-191.052 231.487-417.2 231.487S94.8 453.872 94.8 328.4C94.8 202.928 285.852 96.929 512 96.929z" />
          </svg>
          <span>포인트</span>
        </S.BottomButton>
      </S.ProfileBottom>
    </S.ProfileWrapper>
  );
}
