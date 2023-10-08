import styled from "styled-components";

export const StyledAuthPage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 420px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid gray;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  border: 1px solid gray;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #fcce80;
  color: #fff;
  cursor: pointer;
`;
