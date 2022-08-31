import firebase from 'firebase/compat/app';
import EnvVar from './EnvVar';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
import { UserItem } from './VaraiableInterface';

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

// export interface Data {
//   hamsterList: any;
//   start: any;
//   time: any;
//   seeds: any;
// }

export const myData = async (name?: string, data?: any): Promise<UserItem> => {
  const dataBase = dbService.collection('userList');
  let innerData: UserItem | PromiseLike<UserItem>;
  if (name && data >= 0) {
    const obj: any = {};
    obj[name] = data;
    dataBase.doc(authService.currentUser?.email?.toString()).update({
      ...obj,
    });
    alert('저장됐습니다');
    return innerData!;
  } else {
    (await dataBase.get()).docs.forEach(doc => {
      if (doc.id === authService.currentUser?.email) {
        const a = doc.data() as UserItem;
        innerData = a;
        return innerData;
      }
    });
    return innerData!;
  }
};

export const allData = async () => {
  const newArr: Array<UserItem> = [];
  try {
    const userList = (
      await dbService.collection('userList').get()
    ).docs.forEach(item => {
      const data = item.data() as UserItem;
      newArr.push(data);
    });
    return newArr;
  } catch (e) {
    throw new Error('에러 발생');
  }
};
