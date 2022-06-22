import { authService, dbService } from 'etc/fbase';
import { HamsterListState } from 'state/StateInterface';

let hamsterList: HamsterListState;
let userData: any;

const loadingHamsterList = async (first?: boolean) => {
  const hamsterLoading = await dbService.collection('userList').get();
  hamsterLoading.docs.forEach(doc => {
    if (doc.id === authService.currentUser?.displayName) {
      userData = doc.data();
    }
  });
  if (!userData) {
    const hamsterLoading = await dbService.collection('allHamsterList').get();
    hamsterLoading.docs.forEach(
      ham => (hamsterList = ham.data() as HamsterListState)
    );
  } else {
    hamsterList = userData.hamsterList;
  }
};

export const catchHamster = async (first: boolean) => {
  const userData = await dbService.collection('userList');
  await loadingHamsterList();
  const prevList = Object.values(hamsterList);
  const newHamsterList = Object.values(hamsterList).filter(
    ham => ham.catch === false
  );
  if (newHamsterList.length <= 0) return alert('올 클리어!');
  if (first) {
    hamsterList.Djungarian.catch = true;
    userData.doc(authService.currentUser?.displayName?.toString()).set({
      time: 900,
      hamsterList,
      start: Date.now(),
    });
  } else {
    const randomNumber = Math.floor(
      Math.random() * (newHamsterList.length - 1)
    );
    newHamsterList[randomNumber].catch = true;
    userData.doc(authService.currentUser?.displayName?.toString()).set({
      time: 900,
      hamsterList: prevList,
      start: Date.now(),
    });
  }
};

// const arrayFix = (arr1: Array<object>, arr2: Array<object>) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2[i]) return arr1;
//     arr1[i] = arr1[i] === arr2[i] ? arr1[i] : arr2[i];
//   }
//   return arr1;
// };
