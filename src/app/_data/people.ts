import {linksP} from './People_links';

const font = 20;

const max = {r: 100, fontSize: font, iamgeUrl: 'assets/icons/girl.svg', challengeId: 1};
const medium = {r: 70, fontSize: font, iamgeUrl: 'assets/icons/boy.svg', challengeId: 1};
const min = {r: 40, fontSize: font, iamgeUrl: 'assets/icons/boy.svg', challengeId: 1};

export const PEOPLE_DEFAULT = {
  nodes: [
    {
      name: 'Егор',
      result: null,
      r: 275,
      fontSize: 20,
      iamgeUrl: 'assets/icons/boy.svg',
      challengeId: 1
    },
    {
      name: 'Вова',
      ...max,
      challengeId: 2
    },
    {
      name: 'Сеня',
      ...medium,
      challengeId: 2
    },
    {
      name: 'Гриша',
      ...max,
      challengeId: 2
    },
    {
      name: 'Женя',
      ...min,
      challengeId: 2
    },
  ],
  linksP
};
