// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

	  // Initialize Firebase
	  firebase : {
		apiKey: "AIzaSyAGjcO1_goYIKVWwkkUb5icmkVQ0UB884w",
		authDomain: "questionandanswer-96480.firebaseapp.com",
		databaseURL: "https://questionandanswer-96480.firebaseio.com",
		projectId: "questionandanswer-96480",
		storageBucket: "questionandanswer-96480.appspot.com",
		messagingSenderId: "872746634388"
	  }
};
