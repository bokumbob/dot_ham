import { timerReducer } from './timer';
import { userReducer } from './userAction';
import { loginReducer } from './loginAction';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootRducer = combineReducers({
  loginReducer,
  userReducer,
  timerReducer,
});

export default rootRducer;
export type RootState = ReturnType<typeof rootRducer>;
