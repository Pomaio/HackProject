// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Role } from '../app/_models';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  platformName: 'Hack',
  telegramBot: '983582356:AAEEgkekVOTfU9nojdeV-WWytaOS7Eu6AP8',
  chart_id: '-362853721',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
