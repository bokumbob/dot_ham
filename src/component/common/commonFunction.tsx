import { authService, dbService } from 'etc/fbase';

export const currentDoc = async () => {
  const hamsterLoading = await dbService
    .collection('userList')
    .doc(authService.currentUser!.email!);
  return hamsterLoading;
};

export const whoFirst = async () => {
  let boo = true;
  const hamsterLoading = await dbService.collection('userList').get();
  hamsterLoading.docs.forEach(doc => {
    if (doc.id === authService?.currentUser?.email) {
      boo = false;
    }
  });
  return boo;
};
