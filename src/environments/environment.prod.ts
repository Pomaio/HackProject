import {Role} from '../app/_models';

export const environment = {
  production: true,
  apiUrl: '/api',
  platformName: 'Hack',
  workflow: {
    opportunity: {
      watchHome: {
        permittedRoles: [Role.User, Role.Admin]
      },
      watchProposals: {
        permittedRoles: [Role.Admin]
      }
    }
  }
};
