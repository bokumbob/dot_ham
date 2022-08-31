import { Hamster } from 'state/StateInterface';
import { TouchBoxInter } from './ParamsInterface';

export interface UserItem {
  hamsterList: Hamster[];
  nickname: string;
  seeds: number;
  start: number;
  time: number;
}

export type TouchBoxStyled = Omit<TouchBoxInter, 'onClick'>;
