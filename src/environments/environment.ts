// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://manevent.herokuapp.com/',
  // TODO: add the qimg URL and secret token to the configuration
  qimgUrl: 'https://comem-qimg.herokuapp.com/api',
  qimgSecret: 'XFwqHib1H9SCqx6tDUJPGPcy78nAOyxh/2h8GTsg3bsLw/VnLN7td0RxnuswlISJWAd13mE/b3sZU3WTagvGoQQRo5FF2tKAzI3a1rcsJ8YFS5g29xSVojOmxW90ve9UduYKx5foiDZ5m18It0erxf6hWwPUTorZFyVPS//leKA='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
