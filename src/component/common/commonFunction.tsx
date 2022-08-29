import { authService, dbService } from 'etc/fbase';
// import { first } from 'state/userAction';

export const whoFirst = async () => {
  const hamsterLoading = await dbService.collection('userList').get();
  let boo = true;
  hamsterLoading.docs.forEach(doc => {
    if (doc.id === authService?.currentUser?.email) {
      boo = false;
      return boo;
    }
  });
  return boo;
};
