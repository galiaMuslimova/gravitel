import React, { useMemo } from "react";
import { DashboardSvgProps, Sector } from "./DashboardSvg.types";
import { colors, length } from "./DashboardSvg.constants";
import { DashboardCircle } from "../DashboardCircle";

export const DashboardSvg: React.FC<DashboardSvgProps> = ({
  data,
  sum,
  selectedKey,
  onMouseEnter,
  onMouseLeave,
}) => {
  const sectors: Sector[] = useMemo(() => {
    return data.reduce((acc, cur, index) => {
      const width = (length * cur.value) / sum;
      let offset = length * 0.25;

      if (index > 0) {
        let prevSector: Sector = acc[index - 1];
        offset = prevSector.offset - prevSector.width;
      }

      acc.push({
        offset,
        width,
        strokeDasharray: `${width} ${length - width}`,
        strokeDashoffset: offset,
        value: cur.value,
        key: cur.key,
        color: `${colors[index]}`,
        isSelected: selectedKey === 0 || selectedKey === cur.key,
      });

      return acc;
    }, [] as Sector[]);
  }, [data, selectedKey, sum]);

  return (
    <svg viewBox={`0 0 170 170`} fill="none" width={170} height={170}>
      {sectors.map((sector) => (
        <DashboardCircle
          isSelected={sector.isSelected}
          key={sector.key}
          id={sector.key}
          initColor={sector.color}
          strokeDasharray={`${sector.width} ${length - sector.width}`}
          strokeDashoffset={sector.offset}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </svg>
  );
};
