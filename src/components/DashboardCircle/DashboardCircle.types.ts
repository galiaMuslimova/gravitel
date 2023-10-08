export interface DashboardCircleProps {
  id: number;
  initColor: string;
  strokeDasharray: string;
  strokeDashoffset: number;
  isSelected: boolean;
  onMouseEnter: (key: number) => void;
  onMouseLeave: () => void;
}
