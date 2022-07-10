import { User } from './StateInterface';

const USER = 'userAction/USER';
const HAMSTERLIST = 'userAction/HAMSTERLIST';
const START = 'userAction/START';

export const user = (user: any) => ({ type: USER, user });
export const hamsterList = (hamster: any) => ({ type: HAMSTERLIST, hamster });
export const start = (start: any) => ({ type: START, start });

const userInitialState: User = {
  user: {},
  hamsterList: {},
  start: 0,
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
    case START:
      return {
        ...state,
        start: action.start,
      };
    default:
      return state;
  }
};
