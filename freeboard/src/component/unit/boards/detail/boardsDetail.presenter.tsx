import { dateTimeFormatter } from "../../../../commons/utils/utils";
import * as S from "./boardsDetail.styles";
import { IBoardDetailPresenterProps } from "./boardsDetail.types";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import BoardDeleteModal from "../../../commons/modal/boardDelete";
import { useContext } from "react";
import { WindowSizeContext } from "../../../commons/responsive";

export default function BoardDetailPresenter(P: IBoardDetailPresenterProps) {
  const {
    data,
    onClickLinkModal,
    onClickMapModal,
    modal,
    onClickLikeBtn,
    onClickDislikeBtn,
    onClickMoveToList,
    onClickMoveToEdit,
  } = P;
  const router = useRouter();
  const { isNormalScreen, isMobile } = useContext(WindowSizeContext);
  return (
    <S.Container isNormalScreen={isNormalScreen}>
      <S.TitleWrapper>
        <S.Title>{data ? data.fetchBoard.title : "Loading..."}</S.Title>
        <S.TitleInfoTop>
          {/* {data?.fetchBoard?.user?.picture} */}
          {data?.fetchBoard.writer}
          {` `}
          {dateTimeFormatter(data?.fetchBoard.createdAt)}
        </S.TitleInfoTop>
        <S.TitleInfoBottom isNormalScreen={isNormalScreen}>
          <S.IconWrapper
            onClick={onClickLinkModal}
            // onMouseLeave={P.onRolloverLinkModal}
          >
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6666 0.333496H15.3333V3.00016H20.6666C22.8666 3.00016 24.6666 4.80016 24.6666 7.00016C24.6666 9.20016 22.8666 11.0002 20.6666 11.0002H15.3333V13.6668H20.6666C24.3466 13.6668 27.3333 10.6802 27.3333 7.00016C27.3333 3.32016 24.3466 0.333496 20.6666 0.333496ZM12.6666 11.0002H7.33329C5.13329 11.0002 3.33329 9.20016 3.33329 7.00016C3.33329 4.80016 5.13329 3.00016 7.33329 3.00016H12.6666V0.333496H7.33329C3.65329 0.333496 0.666626 3.32016 0.666626 7.00016C0.666626 10.6802 3.65329 13.6668 7.33329 13.6668H12.6666V11.0002ZM8.66663 5.66683H19.3333V8.3335H8.66663V5.66683Z"
                fill="#06c"
              />
            </svg>
          </S.IconWrapper>
          {modal.link ? (
            <S.LinkModal
              onMouseLeave={onClickLinkModal}
              isNormalScreen={isNormalScreen}
            >
              {router.asPath}
            </S.LinkModal>
          ) : null}
          <S.IconWrapper
            onClick={onClickMapModal} // onMouseLeave={P.onRolloverMapModal}
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M512 0C321.240382 0 167.210876 154.029505 167.210876 344.789124c0 73.460226 23.696847 142.181082 62.796645 197.868672L452.757883 959.722303l29.621058 50.948221c17.772635 17.772635 40.28464 17.772635 58.057275 0L570.057275 959.722303l222.750362-417.064507c39.099798-55.68759 62.796644-124.408447 62.796644-197.868672C856.789124 154.029505 701.574776 0 512 0z m0 526.070003c-72.275383 0-133.887185-41.469482-163.508244-101.896442-11.848423-23.696847-17.772635-50.948221-17.772635-79.384437 0-100.7116 81.754122-181.280879 181.280879-181.28088 100.7116 0 181.280879 81.754122 181.280879 181.28088 0 28.436216-7.109054 55.68759-17.772635 79.384437-29.621059 60.42696-92.417703 101.896442-163.508244 101.896442z"
                fill="#06c"
              />
            </svg>
          </S.IconWrapper>
          {modal.map ? (
            <S.MapModal
              onMouseLeave={onClickMapModal}
              isNormalScreen={isNormalScreen}
            >
              {data?.fetchBoard.boardAddress.address}
              <br />
              {data?.fetchBoard.boardAddress.addressDetail}
            </S.MapModal>
          ) : null}
        </S.TitleInfoBottom>
      </S.TitleWrapper>
      <S.ContentWrapper>
        {data?.fetchBoard?.images?.map((el: string, i: number) => (
          <S.ContentInner key={i}>
            <div>
              <img src={`https://storage.googleapis.com/${el}`}></img>
            </div>
          </S.ContentInner>
        ))}
        <S.ContentInner>
          {data ? data.fetchBoard.contents : "Loading..."}
        </S.ContentInner>
        {data?.fetchBoard.youtubeUrl ? (
          <S.ContentInner>
            <S.YoutubeUrlWrapper>
              <ReactPlayer url={data?.fetchBoard.youtubeUrl} />
            </S.YoutubeUrlWrapper>
          </S.ContentInner>
        ) : undefined}
        <S.LikeDislikeWrapper>
          <S.LikeWrapper onClick={onClickLikeBtn}>
            <S.Svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.11 3.72L10.54 6.61C10.42 7.2 10.58 7.81 10.96 8.27C11.34 8.73 11.9 9 12.5 9H18V10.08L15.43 16H7.34C7.16 16 7 15.84 7 15.66V7.82L11.11 3.72ZM12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83V15.66C5 16.95 6.05 18 7.34 18H15.44C16.15 18 16.8 17.63 17.16 17.03L19.83 10.88C19.94 10.63 20 10.36 20 10.08V9C20 7.9 19.1 7 18 7H12.5L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0ZM2 7H0V18H2C2.55 18 3 17.55 3 17V8C3 7.45 2.55 7 2 7Z"
                fill="#ec7333"
              />
            </S.Svg>
            <div>{data?.fetchBoard.likeCount}</div>
          </S.LikeWrapper>
          <S.DislikeWrapper onClick={onClickDislikeBtn}>
            <S.Svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.42 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L11 11H2V9L5 2H14V12ZM18 0H22V12H18V0Z"
                fill="#828282"
              />
            </S.Svg>
            <div>{data?.fetchBoard.dislikeCount}</div>
          </S.DislikeWrapper>
        </S.LikeDislikeWrapper>
      </S.ContentWrapper>
      <S.ContentBtnWrapper isMobile={isMobile}>
        <S.ContentBtn onClick={onClickMoveToList} isMobile={isMobile}>
          목록으로
        </S.ContentBtn>
        <S.ContentBtn onClick={onClickMoveToEdit} isMobile={isMobile}>
          수정하기
        </S.ContentBtn>
        <BoardDeleteModal />
      </S.ContentBtnWrapper>
    </S.Container>
  );
}
