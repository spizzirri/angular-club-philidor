// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  vistas: {
     escuelita:true,
     torneos:true,
     jugar:false,
     tactica:false,
     ranking:true,
     historia:true,
     contacto:true,
     clases:true,
     colaborar:true
  },
  firebase: {
    apiKey: "AIzaSyDaqdWIj43RwOB2o_kOP2CzBKZpbecHBbM",
    authDomain: "clubphilidorajedrez.firebaseapp.com",
    databaseURL: "https://clubphilidorajedrez.firebaseio.com",
    projectId: "clubphilidorajedrez",
    storageBucket: "clubphilidorajedrez.appspot.com",
    messagingSenderId: "8430141422",
    appId: "1:8430141422:web:e7d7b2c6c55c987b36d8ff",
    measurementId: "G-RQE3CX5Q7Q"
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
