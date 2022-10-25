import { Pagination } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";

type IPageNation02Props = {
  allCount: number | undefined;
  setPageCount: Dispatch<SetStateAction<number>> | undefined;
};

const PageNation02 = (P: IPageNation02Props) => {
  const { allCount, setPageCount } = P;
  const [currentPage, setCurrentPage] = useState(1);
  const onChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
    if (setPageCount) setPageCount(page);
  };

  return (
    <>
      <Pagination
        size="small"
        defaultCurrent={1}
        current={currentPage}
        total={allCount}
        style={{ margin: "24px 0" }}
        onChange={onChangePage}
      />
    </>
  );
};

export default PageNation02;
