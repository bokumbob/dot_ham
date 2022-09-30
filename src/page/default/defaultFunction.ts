import { authService, dbService } from 'etc/fbase';
import { HamsterListState } from 'state/StateInterface';

let hamsterList: HamsterListState;
let userData: any;

const loadingHamsterList = async () => {
  const hamsterLoading = await dbService.collection('userList').get();
  hamsterLoading.docs.forEach(doc => {
    if (doc.id === authService.currentUser?.email) {
      userData = doc.data();
    }
  });
  console.log(userData);
  if (!userData) {
    const hamsterLoading = await dbService.collection('allHamsterList').get();
    hamsterLoading.docs.forEach(
      ham => (hamsterList = ham.data() as HamsterListState)
    );
  } else {
    hamsterList = userData.hamsterList;
  }
};

export const catchHamster = async () => {
  const userData = await dbService.collection('userList');
  await loadingHamsterList();
  console.log(hamsterList);
  const prevList = Object.values(hamsterList);

  const newHamsterList = Object.values(hamsterList).filter(
    ham => ham.catch === false
  );
  // console.log(newHamsterList);
  if (newHamsterList.length <= 0) return alert('올 클리어!');
  const randomNumber = Math.floor(Math.random() * (newHamsterList.length - 1));
  newHamsterList[randomNumber].catch = true;
  userData.doc(authService.currentUser?.email?.toString()).update({
    hamsterList: prevList,
    start: Date.now(),
  });
  return newHamsterList[randomNumber];
};

export const fitstCatchHam = async () => {
  const userData = await dbService.collection('userList');
  await loadingHamsterList();
  hamsterList.Djungarian.catch = true;
  userData.doc(authService.currentUser?.email?.toString()).set({
    time: 900,
    hamsterList,
    start: Date.now(),
    seeds: 0,
    nickname: authService.currentUser?.displayName,
  });
  return hamsterList.Djungarian;
};
