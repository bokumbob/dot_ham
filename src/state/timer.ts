import { TimerReducerState, TimerState } from './StateInterface';

const TIME = 'timer/TIME';
const CURRENTTIME = 'timer/CURRENTTIME';

export const time = (time: number) => ({ type: TIME, time });
export const currentTime = (currentTime: number) => ({
  type: CURRENTTIME,
  currentTime,
});

export const TimerInitialState: TimerState = {
  time: 0,
  currentTime: 0,
};

export const timerReducer = (state = TimerInitialState, action: any) => {
  switch (action.type) {
    case TIME:
      return {
        ...state,
        time: action.time,
      };
    case CURRENTTIME:
      return {
        ...state,
        currentTime: action.currentTime,
      };
    default:
      return state;
  }
};
