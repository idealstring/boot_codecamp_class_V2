import { MouseEvent, useState } from "react";
import { IPaginationProps } from "./pagination.types";
import PaginationPresenter from "./pagination.presenter";

export default function PaginationContainer(P: IPaginationProps) {
  const { refetch, boardsCount } = P;
  const [startPage, setStartPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(0);
  const lastPage = boardsCount ? Math.ceil(boardsCount / 10) : 0;
  // console.log(`lastPage : ${lastPage}`);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setCurrentPage(startPage - 10);
    void refetch({ page: Number(startPage - 10) });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setCurrentPage(startPage + 10);
      void refetch({ page: Number(startPage + 10) });
    } else {
      return;
    }
  };
  const onClickPage = (e: MouseEvent<HTMLButtonElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
    setCurrentPage(Number(e.currentTarget.id));
  };

  return (
    <PaginationPresenter
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
    />
  );
}
