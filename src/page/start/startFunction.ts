import { authService, firebaseInstance } from 'etc/fbase';
import { pass } from 'state/loginAction';

const nicknameCheck = (nickname: string) => {
  const nicknameTest = /^[a-zA-Z0-9가-힣]{2,8}$/;
  if (nicknameTest.test(nickname)) return true;
  else return false;
};

const passCheck = (email: string, password: string) => {
  const emailTest = /^[0-9a-zA-z-_.@]{10,40}$/;
  const passwordTest = /^[a-zA-Z0-9~!@#$%^&*()_-]{8,15}$/;
  if (emailTest.test(email) && passwordTest.test(password)) return true;
  else return false;
};

export async function signUp(
  e: React.FormEvent<HTMLFormElement>,
  state: boolean,
  email: string,
  password: string,
  displayName: string,
  passDispatch: React.Dispatch<any>
) {
  e.preventDefault();
  let data;
  console.log('e');
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
        console.log(data);
        passDispatch(pass());
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        data = await authService.signInWithEmailAndPassword(email, password);
        console.log(data);
        passDispatch(pass());
      } catch (e) {
        console.log(e);
      }
    }
  } else alert('입력 내용을 확인해주세요');
}

export async function social(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  const nameButton = e.target as HTMLParagraphElement;
  const el = nameButton.parentElement as HTMLButtonElement;
  let provider;
  let data;
  if (el.name === 'google') {
    provider = new firebaseInstance.auth.GoogleAuthProvider();
    data = await authService.signInWithPopup(provider);
    console.log(data);
  } else if (el.name === 'twitter') {
    provider = new firebaseInstance.auth.TwitterAuthProvider();
    data = await authService.signInWithPopup(provider);
    console.log(data);
  }
}
