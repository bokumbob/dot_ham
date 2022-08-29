import { whoFirst } from 'component/common/commonFunction';
import { User } from './StateInterface';

const USER = 'userAction/USER';
const FIRST = 'userAction/FIRST';
const HAMSTERLIST = 'userAction/HAMSTERLIST';
const START = 'userAction/START';

export const user = (user: any) => ({ type: USER, user });
export const first = (first: any) => ({ type: FIRST, first });
export const hamsterList = (hamster: any) => ({ type: HAMSTERLIST, hamster });
export const start = (start: any) => ({ type: START, start });

const userInitialState: User = {
  user: {},
  first: false,
  hamsterList: [
    {
      id: 0,
      name: '정글리안',
      catch: true,
      description: '햄스터 하면 생각나는 햄스터. 엄청 귀여워!',
    },
    { id: 1, name: '???' },
    { id: 2, name: '???' },
    { id: 3, name: '???' },
    { id: 4, name: '???' },
    { id: 5, name: '???' },
    { id: 6, name: '???' },
    { id: 7, name: '???' },
    { id: 8, name: '???' },
  ],
  start: 0,
};

export const userReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.user,
      };
    case FIRST:
      return {
        ...state,
        first: action.first,
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
