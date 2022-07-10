import { Action } from 'history';
import { seedGameInit } from './StateInterface';

const START = 'seedGameAction/START';
const SEEDS = 'seedGameAction/SEEDS';

export const start = () => ({ type: START });
export const seeds = () => ({ type: SEEDS });

type seedGameAction = ReturnType<typeof start>;

export const seedGameInitialState: seedGameInit = {
  start: false,
  seeds: 0,
};

export const seedGameReducer = (
  state = seedGameInitialState,
  action: seedGameAction
): seedGameInit => {
  switch (action.type) {
    case START:
      return {
        ...state,
        start: true,
      };
    case SEEDS:
      return {
        ...state,
        seeds: state.seeds + 1,
      };
    default:
      return state;
  }
};
