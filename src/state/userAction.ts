import { User } from './StateInterface';

const USER = 'userAction/USER';
const HAMSTERLIST = 'userAction/HAMSTERLIST';

export const user = (user: any) => ({ type: USER, user });
export const hamsterList = (hamster: any) => ({ type: HAMSTERLIST, hamster });

const userInitialState: User = {
  user: {},
  // first: false,
  hamsterList: {},
};

export const userReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.user,
      };
    case HAMSTERLIST:
      return {
        ...state,
        hamsterList: action.hamster,
      };
    default:
      return state;
  }
};
