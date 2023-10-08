import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DashboardData, DashboardProps } from "./Dashboard.types";
import { DashboardSvg } from "../DashboardSvg";
import {
  StyledDashboard,
  StyledLegend,
  StyledName,
  StyledSum,
  StyledSvgGroup,
  StyledSvgText,
} from "./Dashboard.style";
import { DashboardRow } from "../DashboardRow";

export const Dashboard: React.FC<DashboardProps> = ({ data, title }) => {
  const [num, setNum] = useState(0);
  const [selectedKey, setSelectedKey] = useState<number | null>(null);

  const dashboardData = useMemo(() => {
    let dashboard: DashboardData[] = [];

    if (data) {
      dashboard.push({ key: 1, text: "Активных", value: data?.active });
      dashboard.push({ key: 2, text: "Неактивных", value: data?.inactive });
      dashboard.push({ key: 3, text: "Завершенных", value: data?.completed });
    }

    return dashboard;
  }, [data]);

  const sum = useMemo(
    () =>
      dashboardData
        .map((item) => item.value)
        .reduce((acc, cur) => acc + cur, 0),
    [dashboardData]
  );

  const handleMouseEnter = useCallback(
    (key: number) => {
      const hoveredData = dashboardData.find((item) => item.key === key);
      setNum(hoveredData?.value ?? sum);
      setSelectedKey(key);
    },
    [dashboardData, sum]
  );
  const handleMouseLeave = useCallback(() => {
    setNum(sum);
    setSelectedKey(null);
  }, [sum]);

  useEffect(() => setNum(sum), [sum]);

  return (
    <StyledDashboard>
      <StyledSvgGroup>
        <DashboardSvg
          data={dashboardData}
          sum={sum}
          selectedKey={selectedKey}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <StyledSvgText>
          <StyledName>{title}</StyledName>
          <StyledSum>{num}</StyledSum>
        </StyledSvgText>
      </StyledSvgGroup>
      <StyledLegend>
        <DashboardRow
          id={0}
          text="Всего"
          num={sum}
          isSelected={selectedKey === 0}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {dashboardData.map((item) => (
          <DashboardRow
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id={item.key}
            key={item.key}
            text={item.text}
            num={item.value}
            isSelected={item.key === selectedKey}
          />
        ))}
      </StyledLegend>
    </StyledDashboard>
  );
};
