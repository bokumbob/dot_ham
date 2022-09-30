import { currentDoc } from 'component/common/commonFunction';
import { authService, dbService, firebaseInstance } from 'etc/fbase';
import { user } from 'state/userAction';

export const googleWithdrawal = async (
  token: string,
  acToken: string,
  dispatch: any,
  nav: any
) => {
  const credential = firebaseInstance.auth.GoogleAuthProvider.credential(
    token,
    acToken
  );
  try {
    await authService.currentUser
      ?.reauthenticateWithCredential(credential)
      .then(res => {
        if (confirm('정말 탈퇴하실 건가요?')) {
          currentDoc().then(res => res.delete());
          authService.currentUser?.delete().then(res => {
            alert('탈퇴됐습니다');
            dispatch(user({}));
            nav('/');
          });
        } else alert('취소됐습니다');
      });
  } catch (e) {
    alert('회원 탈퇴 에러');
  }
};
export const withdrawal = async (password: string, dispatch: any, nav: any) => {
  const credential = firebaseInstance.auth.EmailAuthProvider.credential(
    authService.currentUser!.email!,
    password
  );

  try {
    await authService.currentUser
      ?.reauthenticateWithCredential(credential)
      .then(res => {
        if (confirm('정말 탈퇴하실 건가요?')) {
          currentDoc().then(res => res.delete());
          authService.currentUser?.delete().then(res => {
            alert('탈퇴됐습니다');
            dispatch(user({}));
            nav('/');
          });
        } else alert('취소됐습니다');
      });
  } catch (e) {
    alert('회원 탈퇴를 실패했습니다');
  }
};
