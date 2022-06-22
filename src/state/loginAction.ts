import { LoginState } from './StateInterface';

const EMAIL = 'loginAction/EMAIL';
const PASSWORD = 'loginAction/PASSWORD';
const NEWACCOUNT = 'loginAction/NEWACCOUNT';
const NICKNAME = 'loginAction/USER';
const INIT = 'loginAction/INIT';
const PASS = 'loginAction/PASS';

export const email = (email: string) => ({ type: EMAIL, email });
export const password = (password: string) => ({ type: PASSWORD, password });
export const newAccount = (newAcc: boolean) => ({ type: NEWACCOUNT, newAcc });
export const nickname = (nickname: string) => ({ type: NICKNAME, nickname });
export const init = (init: boolean) => ({ type: INIT, init });
export const pass = () => ({ type: PASS });

export const loginInitialState: LoginState = {
  email: '',
  password: '',
  newAccount: false,
  nickname: '',
  init: false,
  pass: false,
};

export const loginReducer = (state = loginInitialState, action: any) => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case NEWACCOUNT:
      return {
        ...state,
        newAccount: action.newAcc,
      };
    case NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
    case INIT:
      return {
        ...state,
        init: action.init,
      };
    case PASS:
      return {
        ...state,
        pass: !action.pass,
      };
    default:
      return state;
  }
};
