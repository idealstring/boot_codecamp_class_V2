import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IScreenProps } from "./boardsDetail.types";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${(props: IScreenProps) =>
    props.isNormalScreen ? "60px 100px 100px 100px" : "60px 30px 100px 30px;"};
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  margin: 0 0 30px 0;
  padding: ${(props: IScreenProps) =>
    props.isNormalScreen ? "50px 0" : "50px 0 30px 0;"};
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 0.5px solid #bdbdbd;

  // height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${StyleSet.fontSize.h1};
  font-weight: 500;
`;

export const TitleInfoTop = styled.div`
  margin: 5px 0;
  font-size: ${StyleSet.fontSize.b4};
  font-weight: 300;

  width: 100%;
  color: #666666;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const TitleInfoBottom = styled.div`
  margin: ${(props: IScreenProps) =>
    props.isNormalScreen ? "5px 0" : "10px 0 0 0;"};
  font-size: ${StyleSet.fontSize.b4};
  font-weight: 400;

  width: 300px;
  color: #666666;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: ${(props: IScreenProps) =>
    props.isNormalScreen ? "flex-end" : "center"};
  align-items: center;
  cursor: pointer;

  position: ${(props: IScreenProps) =>
    props.isNormalScreen ? "absolute" : "relative"};
  left: ${(props: IScreenProps) => (props.isNormalScreen ? "470px" : null)};
  top: ${(props: IScreenProps) => (props.isNormalScreen ? "110px" : null)};
`;

export const IconWrapper = styled.div`
  margin: 0 5px;
  width: 26px;
  height: 26px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkModal = styled.div`
  top: ${(props: IScreenProps) => (props.isNormalScreen ? "35px" : "40px")};
  right: 30px;
  padding: 10px 20px;
  background-color: #999999;
  color: #fff;

  position: absolute;
  &:after {
    position: absolute;
    content: "";
    top: -5px;
    right: ${(props: IScreenProps) =>
      props.isNormalScreen ? "20px" : "133px"};
    width: 10px;
    height: 10px;
    background-color: #999999;
    transform: rotate(45deg);
  }
`;

// export const MapIcon = styled.button`
//   width: 18px;
//   height: 26px;
// `;

export const MapModal = styled.div`
  top: ${(props: IScreenProps) => (props.isNormalScreen ? "35px" : "40px")};
  right: -8px;
  padding: 10px 20px;
  background-color: #999999;
  color: #ffffff;

  // display: none;

  position: absolute;
  &:after {
    position: absolute;
    content: "";
    top: -5px;
    right: ${(props: IScreenProps) =>
      props.isNormalScreen ? "20px" : "135px"};
    width: 10px;
    height: 10px;
    background-color: #999999;
    transform: rotate(45deg);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const ContentInner = styled.div`
  margin-bottom: 10px;
  line-height: 30px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div img {
    width: 100%;
    height: auto;
  }
`;
export const YoutubeUrlWrapper = styled.div`
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-items: center;
`;

export const LikeDislikeWrapper = styled.div`
  margin: 50px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LikeWrapper = styled.div`
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;
  color: ${StyleSet.colors.point02};
  cursor: pointer;
`;

export const DislikeWrapper = styled.div`
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;
  color: #828282;
  cursor: pointer;
`;

export const Svg = styled.svg`
  margin: 0 auto;
`;

export const ContentBtnWrapper = styled.div`
  margin: 0 auto;

  width: ${(props: IScreenProps) => (props.isMobile ? "100%" : "500px")};
  height: ${(props: IScreenProps) => (props.isMobile ? "180px" : "auto")};
  display: flex;
  flex-direction: ${(props: IScreenProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: ${(props: IScreenProps) =>
    props.isMobile ? "space-between" : "space-around"};
`;

export const ContentBtn = styled.button`
  width: ${(props: IScreenProps) => (props.isMobile ? "100%" : "122px")};
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: none;
  cursor: pointer;
`;
