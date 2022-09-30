import { allData, authService, firebaseInstance } from 'etc/fbase';
import { pass } from 'state/loginAction';
import { socialReturn } from 'state/StateInterface';

export const nicknameCheck = async (nickname: string) => {
  const nicknameTest = /^[a-zA-Z0-9가-힣]{1,8}$/;
  if (nicknameTest.test(nickname)) {
    const filter = await allData().then(res =>
      res.filter(item => item.nickname === nickname)
    );
    if (filter.length > 0) {
      alert('닉네임이 중복됐습니다');
      return false;
    } else {
      alert('사용가능한 닉네임입니다');
      return true;
    }
  } else {
    alert('닉네임 양식이 잘못됐습니다');
    return false;
  }
};

const passCheck = (email: string, password: string) => {
  const emailTest = /^[0-9a-zA-z-_.@]{10,40}$/;
  const passwordTest = /^[a-zA-Z0-9~!@#$%^&*()_-]{8,15}$/;
  if (emailTest.test(email) && passwordTest.test(password)) return true;
  else return false;
};

export async function signUp(
  state: boolean,
  email: string,
  password: string,
  passDispatch: React.Dispatch<any>,
  nav: any,
  displayName?: string
) {
  let data;
  if (passCheck(email, password)) {
    if (state) {
      try {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        data.user?.updateProfile({
          displayName,
        });
        passDispatch(pass());
        nav('/main');
      } catch (e) {
        console.log(e);
        alert('이미 가입된 이메일입니다');
      }
    } else {
      try {
        data = await authService.signInWithEmailAndPassword(email, password);
        passDispatch(pass());
        nav('/main');
      } catch (e) {
        console.log(e);
        alert('입력 내용을 확인해주세요');
      }
    }
  } else alert('이메일 혹은 비밀번호가 잘못됐습니다');
}

export async function social(
  e?: React.MouseEvent<HTMLButtonElement>
): Promise<socialReturn | any> {
  e?.preventDefault();
  const provider = new firebaseInstance.auth.GoogleAuthProvider();
  const data = await authService.signInWithPopup(provider);
  return data.credential;
}
