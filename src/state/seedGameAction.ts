import { Action } from 'history';
import { seedGameInit } from './StateInterface';

const START = 'seedGameAction/START';
const STOP = 'seedGameAction/STOP';
const SEEDS = 'seedGameAction/SEEDS';
const SEEDSRESET = 'seedGameAction/SEEDSRESET';
const RESET = 'seedGameAction/RESET';
const SEEDNUMBER = 'seedGameAction/SEEDNUMBER';
const SEEDNUMBERRESET = 'seedGameAction/SEEDNUMBERRESET';

export const start = () => ({ type: START });
export const stop = () => ({ type: STOP });
export const seeds = () => ({ type: SEEDS });
export const seedsReset = () => ({ type: SEEDSRESET });
export const reset = () => ({ type: RESET });
export const seedNumber = () => ({ type: SEEDNUMBER });
export const seedNumberReset = () => ({ type: SEEDNUMBERRESET });

type seedGameAction = ReturnType<typeof start>;

export const seedGameInitialState: seedGameInit = {
  start: false,
  stop: true,
  seeds: 0,
  seedNumber: 0,
};

export const seedGameReducer = (
  state = seedGameInitialState,
  action: seedGameAction
): seedGameInit => {
  switch (action.type) {
    case START:
      return {
        ...state,
        start: !state.start,
      };
    case STOP:
      return {
        ...state,
        stop: !state.stop,
      };
    case SEEDS:
      return {
        ...state,
        seeds: state.seeds + 1,
      };
    case SEEDSRESET:
      return {
        ...state,
        seeds: 0,
      };
    case RESET: {
      return {
        ...state,
        seeds: 0,
      };
    }
    case SEEDNUMBER: {
      return {
        ...state,
        seedNumber: state.seedNumber + 1,
      };
    }
    case SEEDNUMBERRESET: {
      return {
        ...state,
        seedNumber: 0,
      };
    }
    default:
      return state;
  }
};
