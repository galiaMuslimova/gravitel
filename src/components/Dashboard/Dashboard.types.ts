export interface Data {
  active: number;
  inactive: number;
  completed: number;
}

export interface DashboardProps {
  data: Data;
  title: string;
}

export interface DashboardData {
  text: string;
  key: number;
  value: number;
}
