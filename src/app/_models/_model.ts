export interface Proposal {
  id: number;
  title: string;
  accumulated: number;
  goal: number;
  goal_date: string;
  rate: number;
  period: number;
}

export const PROPOSALS_MOCK: Proposal[] = [
  {
    id: 305450,
    title: 'ООО "ГЕС"',
    accumulated: 476661.89,
    goal: 497959.19,
    goal_date: new Date().toISOString(),
    rate: 32,
    period: 90,
  },
  {
    id: 305450,
    title: 'ООО "ГЕС"',
    accumulated: 476661.89,
    goal: 497959.19,
    goal_date: new Date().toISOString(),
    rate: 32,
    period: 90
  },
  {
    id: 305450,
    title: 'ООО "ГЕС"',
    accumulated: 476661.89,
    goal: 497959.19,
    goal_date: new Date().toISOString(),
    rate: 32,
    period: 90
  },
  {
    id: 305450,
    title: 'ООО "ГЕС"',
    accumulated: 476661.89,
    goal: 497959.19,
    goal_date: new Date().toISOString(),
    rate: 32,
    period: 90
  }
];
