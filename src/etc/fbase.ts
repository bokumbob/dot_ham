import firebase from 'firebase/compat/app';
import EnvVar from './EnvVar';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: EnvVar.API_KEY,
  authDomain: EnvVar.AUTH_DOMAIN,
  projectId: EnvVar.PROJECT_ID,
  storageBucket: EnvVar.STORAGE_BUCKET,
  messagingSenderId: EnvVar.MESSAGINGSENDER_ID,
  appId: EnvVar.APP_ID,
  measurementId: EnvVar.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
// 파이어 베이스 초기화 해주는 것

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
