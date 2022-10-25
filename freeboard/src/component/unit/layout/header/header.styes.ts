import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.header`
  width: 100%;
`;

export const Wrapper = styled.header`
  margin: 0 auto;
  padding: 25px 25px;

  max-width: 1050px;
  min-width: 400px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBtnWrapper = styled.div`
  width: 120px;
`;
export const NavBtn = styled.button`
  margin: 10px;
  padding: 0;
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  //   padding: 0 30px;
`;

export const LogoBtn = styled.button`
  margin: 10px;
  padding: 0;
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

export const LoginWrapper = styled.div``;

export const NoMemberWrapper = styled.div`
  width: 130px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: ${StyleSet.fontSize.b5};
`;

export const SignIn = styled.button`
  margin: 10px;
  padding: 0;
  color: #555;
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

export const Join = styled.button`
  margin: 10px;
  padding: 0;
  color: #555;
  background-color: transparent;
  border: 0;

  cursor: pointer;
`;

export const MemberWrapper = styled.div`
  width: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MemberBtn = styled.button`
  margin: 10px;
  padding: 0;
  background-color: transparent;
  border: 0;

  position: relative;

  cursor: pointer;
`;

export const BasketAmount = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${StyleSet.colors.point02};
  color: #fff;
  font-size: ${StyleSet.fontSize.b5};
  line-height: 1rem;
  text-align: center;

  position: absolute;
  top: 0;
  right: -5px;
`;
