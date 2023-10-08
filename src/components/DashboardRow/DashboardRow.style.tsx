import styled, { css } from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledText = styled.p<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected &&
    css`
      text-decoration: underline;
      color: purple;
    `}
`;
