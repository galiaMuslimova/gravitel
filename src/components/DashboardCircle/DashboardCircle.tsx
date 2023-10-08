import React, { useCallback, useEffect, useState } from "react";
import { radius } from "./DashboardCircle.constants";
import { DashboardCircleProps } from "./DashboardCircle.types";

export const DashboardCircle: React.FC<DashboardCircleProps> = ({
  id,
  initColor,
  strokeDasharray,
  strokeDashoffset,
  isSelected,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [color, setColor] = useState(initColor);

  const handleMouseEnter = useCallback(() => {
    setColor("#f9a752");
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setColor(initColor);
    onMouseLeave();
  }, [initColor, onMouseLeave]);

  useEffect(
    () => setColor(isSelected ? "#f9a752" : initColor),
    [initColor, isSelected]
  );

  return (
    <circle
      cx={85}
      cy={85}
      r={radius}
      stroke={color}
      fill="none"
      strokeDasharray={strokeDasharray}
      strokeDashoffset={strokeDashoffset}
      strokeWidth={10}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
