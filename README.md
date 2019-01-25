# Panda Mood
The retrospective helper that you looked for !

Working with Firebase.

## Configuration
First create a `firebase.conf.ts` file in `src/services/AuthService`.

Then, you need to setup Firebase in order to get your database.
At the end you should be able to generate this configuration object:

```typescript
// Initialize Firebase
export const config = {
    apiKey: "your-API-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "firebase-provided-id"
};
```
If you want to restrain access to specific users, you can add 

```typescript
// Authentication URI parameters
export const uriPrams = {
  hd: ['mydomainname.com','anotherdomainname.com']
};
```

## Running the app
```bash
yarn install
yarn start
```
