import styled from "@emotion/styled";
import { IProfileStylesProps } from "./profile.types";
import { StyleSet } from "../../../commons/style/styleSet";

export const ProfileWrapper = styled.section`
  padding: 30px 25px 16px;
  width: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "20%" : "100%"};
  max-width: 1000px;
  min-width: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "210px" : "500px"};
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileTop = styled.section`
  padding-bottom: 16px;
  width: 100%;
  min-height: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "220px" : "160px"};

  display: flex;
  flex-direction: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "column" : "row"};
  justify-content: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "space-between" : "center"};
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const NicknameWrapper = styled.div`
  margin: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "0" : "0 0 0 24px"};
  min-height: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "100px" : "70px"};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "center" : "flex-start"};

  span {
    margin: 10px 0 0 0;
    font-size: ${StyleSet.fontSize.h5};
    font-weight: 700;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "column" : "row"};
  justify-content: space-between;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  margin: 5px 0 0 0;
  border: none;
  background-color: transparent;
  font-size: ${StyleSet.fontSize.b5};
  font-weight: 100;
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding: 3px 14px;
  font-size: ${StyleSet.fontSize.b5};
  background-color: transparent;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;

  cursor: pointer;
`;

export const ProfileBottom = styled.section`
  width: 100%;
  padding: 24px 0 6px;

  border-top: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: ${(props: IProfileStylesProps) =>
    props.isNormalScreen ? "space-between" : "center"};
  align-items: center;
`;

export const BottomButton = styled.button`
  margin: 0 5px;
  padding: 3px 14px;
  width: 70px;
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  text-align: center;

  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  svg {
    margin: 0 auto;
  }
  span {
    margin: 0 auto;
    font-size: ${StyleSet.fontSize.b5};
  }
`;
