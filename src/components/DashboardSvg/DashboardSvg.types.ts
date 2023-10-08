import { DashboardData } from "../Dashboard/Dashboard.types";

export interface DashboardSvgProps {
  data: DashboardData[];
  sum: number;
  selectedKey: number | null;
  onMouseEnter: (key: number) => void;
  onMouseLeave: () => void;
}

export interface Sector {
  strokeDasharray: string;
  strokeDashoffset: number;
  value: number;
  key: number;
  width: number;
  offset: number;
  color: string;
  isSelected: boolean;
}
