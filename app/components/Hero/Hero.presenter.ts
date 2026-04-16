import { DashboardStat, HeroPresenterProps } from './Hero.model';

export const useHeroPresenter = (): HeroPresenterProps => {
  // Mock data for the floating dashboard card
  const stats: DashboardStat[] = [
    { id: '1', label: 'PATIENTS TODAY', value: '24', colorClass: 'text-teal-600' },
    { id: '2', label: 'SURGERY', value: '02', colorClass: 'text-gray-800' },
    { id: '3', label: 'EMERGENCIES', value: '01', colorClass: 'text-red-500' },
  ];

  return { stats };
};