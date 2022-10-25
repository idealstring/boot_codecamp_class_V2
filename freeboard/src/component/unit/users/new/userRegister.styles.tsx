import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 400px;
`;

export const Hgroup = styled.hgroup`
  margin: 30px 0 0 0;
  h1 {
    margin: 0;
    font-size: ${StyleSet.fontSize.h3};
    font-weight: 600;
  }
`;

export const Form = styled.form`
  padding: 20px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Inner = styled.label`
  margin: 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Label = styled.label`
  margin: 25px 0 10px 0;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
`;

export const ConditionsWrapper = styled.div`
  padding: 15px 15px 15px 15px;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;
  //   background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AllCheck = styled.span`
  margin: 0 0 0 10px;
  font-weight: 500;
  font-size: ${StyleSet.fontSize.b3};
`;

export const EssentialCheck = styled.span`
  margin: 0 0 0 10px;
  font-size: ${StyleSet.fontSize.b3};
  :after {
    content: " (필수)";
    color: ${StyleSet.colors.point01};
    font-size: ${StyleSet.fontSize.b5};
    font-weight: 300;
  }
`;

export const SelectedCheck = styled.span`
  margin: 0 0 0 10px;
  font-size: ${StyleSet.fontSize.b3};
  :after {
    content: " (선택)";
    color: ${StyleSet.colors.lightGray02};
    font-size: ${StyleSet.fontSize.b5};
    font-weight: 300;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${StyleSet.colors.lightGray01};
`;

export const UserRegisterBtn = styled.button`
  margin: 28px 0 0 0;
  width: 100%;
  padding: 11px 10px;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const LoginBtn = styled.button`
  margin: 25px 8px;
  text-align: center;
  font-weight: 500;
  text-decoration: underline;

  border: none;
  background-color: #fff;

  cursor: pointer;
`;
