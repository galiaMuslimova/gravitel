import React, { useCallback } from "react";
import { StyledRow, StyledText } from "./DashboardRow.style";
import { DashboardRowProps } from "./DashboardRow.types";

export const DashboardRow: React.FC<DashboardRowProps> = ({
  id,
  text,
  num,
  isSelected = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleMouseEnter = useCallback(
    () => onMouseEnter(id),
    [id, onMouseEnter]
  );

  return (
    <StyledRow onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      <StyledText isSelected={isSelected}>{text}</StyledText>
      <StyledText isSelected={isSelected}>{num}</StyledText>
    </StyledRow>
  );
};
