export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  colorClass: string;
}

export interface HeroPresenterProps {
  stats: DashboardStat[];
}