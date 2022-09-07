import { authService, firebaseInstance } from 'etc/fbase';

export const withdrawal = async (token: string, acToken: string) => {
  const credential = firebaseInstance.auth.GoogleAuthProvider.credential(
    token,
    acToken
  );
  //   console.log(credential);
  try {
    await authService.currentUser
      ?.reauthenticateWithCredential(credential)
      .then(res => {
        if (confirm('정말 탈퇴하실 건가요?'))
          authService.currentUser?.delete().then(res => {
            alert('탈퇴됐습니다');
          });
        else alert('취소됐습니다');
      });
  } catch (e) {
    alert('회원 탈퇴 에러');
  }
};
