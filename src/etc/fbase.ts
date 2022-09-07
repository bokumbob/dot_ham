import firebase from 'firebase/compat/app';
import EnvVar from './EnvVar';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();

export const myData = async (): Promise<UserItem> => {
  const dataBase = dbService.collection('userList');
  let innerData: UserItem | undefined;
  try {
    (await dataBase.get()).docs.forEach(doc => {
      if (doc.id === authService.currentUser?.email) {
        const a = doc.data() as UserItem;
        innerData = a;
      }
    });
  } catch (e) {
    alert('데이터 불러오기를 실패했습니다');
  }
  return innerData as UserItem;
};

export const addData = async (name: string, data: string): Promise<void> => {
  const dataBase = dbService.collection('userList');
  try {
    const obj: any = {};
    obj[name] = data;
    dataBase.doc(authService.currentUser?.email?.toString()).update({
      ...obj,
    });
    alert('저장됐습니다');
  } catch (e) {
    alert('저장에 실패했습니다');
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
