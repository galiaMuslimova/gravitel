export interface DashboardRowProps {
  id: number;
  text: string;
  num: number;
  isSelected: boolean;
  onMouseEnter: (key: number) => void;
  onMouseLeave: () => void;
}
