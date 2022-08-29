import { seedGameReducer } from './seedGameAction';
import { timerReducer } from './timer';
import { userReducer } from './userAction';
import { loginReducer } from './loginAction';
import { combineReducers } from 'redux';

const rootRducer = combineReducers({
  loginReducer,
  userReducer,
  timerReducer,
  seedGameReducer,
});

export default rootRducer;
export type RootState = ReturnType<typeof rootRducer>;
