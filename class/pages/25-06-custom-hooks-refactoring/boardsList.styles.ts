import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const BoardContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 40px 30px 100px 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  // box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const BestListContainer = styled.div`
  width: 100%;
`;
export const BestListWrapper = styled.div`
  margin: 0 auto;
  padding: 100px;
  width: 100%;
  max-width: 1200px;
  min-width: 500px;
  height: 400px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const BestBoard = styled.div`
  margin-right: 25px;
  padding: 30px 40px;
  width: 230px;
  min-width: 230px;
  height: 200px;

  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  position: relative;
`;

export const BestTitle = styled.span`
  margin-top: 10px;
  width: 100%;
  font-size: 1.02857rem;
  font-weight: 600;
  z-index: 10;

  text-overflow: ellipsis;
  overflow: hidden;
  // white-space: nowrap;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const BestImg = styled.img`
  width: 230px;
  height: 200px;
  border-radius: 10px;

  object-fit: cover;
  opacity: 0.3;
  z-index: 0;

  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`;
export const BestDate = styled.span`
  color: #aaa;
  font-size: 0.82857rem;

  z-index: 10;
`;

export const SearchBarWrapper = styled.div`
  width: 100%;

  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;
`;

export const SearchWordWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-items: center;
`;

export const SearchWord = styled.input`
  padding: 9px 62px 9px 16px;
  width: 360px;
  height: 48px;
  border: 1px solid #d8d8d8;
`;

export const DateOpenBtn = styled.button`
  margin: 0 auto;
  margin-top: 10px;
  padding: 2px;
  width: 100px;
  border: none;
  background-color: transparent;
`;

export const SearchDate = styled.div`
  margin: 0 auto;
  margin-bottom: 25px;
  width: 360px;
  height: 48px;
  text-align: center;
  line-height: 48px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const ListWrapper = styled.ul`
  padding: 0;
  border-top: 1px solid;
  border-bottom: 1px solid #eee;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;

  font-size: ${StyleSet.fontSize.b2};
`;

export const ListTop = styled.li`
  padding: 0 20px;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;

  letter-spacing: -0.6px;
  font-size: ${StyleSet.fontSize.b1};
`;

export const ListNumber = styled.span`
  width: 50px;
  line-height: 44px;
  text-align: center;
`;
export const ListTitle = styled.span`
  width: 65%;
  line-height: 44px;
  text-align: center;
`;
export const ListWriter = styled.span`
  width: 110px;
  line-height: 44px;
  text-align: center;
`;
export const ListDate = styled.span`
  width: 110px;
  min-width: 90px;
  line-height: 44px;
  text-align: center;
`;

export const ListContent = styled.li`
  padding: 0 20px;
  height: 88px;

  border-top: 1px solid #eee;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;

  cursor: pointer;
`;

export const ContentNumber = styled.span`
  width: 50px;
  line-height: 88px;
  text-align: center;
`;
export const ContentTitle = styled.span`
  width: 65%;
  line-height: 88px;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ContentWriter = styled.span`
  width: 110px;
  line-height: 88px;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ContentDate = styled.span`
  width: 110px;
  line-height: 88px;
  text-align: center;
`;

export const ListFooter = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const ContentBtn = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: transparent;
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 0;
`;
