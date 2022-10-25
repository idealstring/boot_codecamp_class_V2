import Link from "next/link";
import { Fragment, useContext } from "react";
import * as S from "./boardsList.styles";
import { IBoardListPresenterProps } from "./boardsList.types";
import { dateFormatter } from "../../../../commons/utils/utils";
import PaginationContainer from "../../../commons/pagination/01/pagination.container";
import { DatePicker, Space } from "antd";
import moment from "moment";

export default function BoardListPresenter(P: IBoardListPresenterProps) {
  const {
    fetchBoardsOfTheBestDate,
    fetchBoardsData,
    onClickToWrite,
    onClickDateOpen,
    isDateOpen,
    refetch,
    boardsCount,
    onChangeSearch,
    onChangeDatePicker,
  } = P;
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  return (
    <Fragment>
      <S.BestListContainer className="grayMutation">
        <S.BestListWrapper>
          {fetchBoardsOfTheBestDate?.fetchBoardsOfTheBest?.map((bestBoard) => (
            <Link href={`/boards/${bestBoard._id}`} key={bestBoard._id}>
              <S.BestBoard id="BestBoard">
                <S.BestTitle>{bestBoard.title}</S.BestTitle>
                {bestBoard.images?.[0] ? (
                  <S.BestImg
                    src={`https://storage.googleapis.com/${bestBoard.images[0]}`}
                  />
                ) : null}

                <S.BestDate>{dateFormatter(bestBoard.createdAt)}</S.BestDate>
              </S.BestBoard>
            </Link>
          ))}
        </S.BestListWrapper>
      </S.BestListContainer>
      <S.BoardContainer>
        <S.SearchBarWrapper>
          <S.SearchWordWrapper>
            <S.SearchWord
              className="검색바"
              placeholder="검색어를 입력하세요."
              onChange={onChangeSearch}
            />
          </S.SearchWordWrapper>
          <S.DateOpenBtn onClick={onClickDateOpen}>
            {!isDateOpen ? (
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M894.973949 322.308432a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z" />
                  <path d="M114.9 291.4l-35.3 35.3 422.5 422.5 427.6-427.7-30.6-30.6h-7.8L502.9 679.4z" />
                  <path d="M79.547924 326.565605a24.8 24.8 0 1 0 35.071885-35.073108 24.8 24.8 0 1 0-35.071885 35.073108Z" />
                </g>{" "}
              </svg>
            ) : (
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(180)"
              >
                <g>
                  <path d="M894.973949 322.308432a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z" />
                  <path d="M114.9 291.4l-35.3 35.3 422.5 422.5 427.6-427.7-30.6-30.6h-7.8L502.9 679.4z" />
                  <path d="M79.547924 326.565605a24.8 24.8 0 1 0 35.071885-35.073108 24.8 24.8 0 1 0-35.071885 35.073108Z" />
                </g>
              </svg>
            )}
          </S.DateOpenBtn>
          {isDateOpen ? (
            <S.SearchDate className="grayMutation">
              <Space>
                <RangePicker
                  onChange={onChangeDatePicker}
                  allowClear={false}
                  defaultValue={[
                    moment(new Date(), dateFormat),
                    moment(
                      `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
                      dateFormat
                    ),
                  ]}
                  format={dateFormat}
                />
              </Space>
            </S.SearchDate>
          ) : null}
        </S.SearchBarWrapper>
        <S.ListContainer>
          <S.ListWrapper>
            <S.ListTop>
              <S.ListNumber>번호</S.ListNumber>
              <S.ListTitle>제목</S.ListTitle>
              <S.ListWriter>작성자</S.ListWriter>
              <S.ListDate>날짜</S.ListDate>
            </S.ListTop>
            {fetchBoardsData?.fetchBoards?.map((board, i) => (
              <Link href={`/boards/${board._id}`} key={board._id}>
                <S.ListContent className="ListContent">
                  <S.ContentNumber>{i + 1}</S.ContentNumber>
                  <S.ContentTitle>{board.title}</S.ContentTitle>
                  <S.ContentWriter>{board.writer}</S.ContentWriter>
                  <S.ContentDate>
                    {dateFormatter(board.createdAt)}
                  </S.ContentDate>
                </S.ListContent>
              </Link>
            ))}
          </S.ListWrapper>
          <S.ListFooter>
            <PaginationContainer refetch={refetch} boardsCount={boardsCount} />
            <S.ContentBtn onClick={onClickToWrite}>글쓰기</S.ContentBtn>
          </S.ListFooter>
        </S.ListContainer>
      </S.BoardContainer>
    </Fragment>
  );
}
