import { Hamster } from 'state/StateInterface';

export interface UserItem {
  hamsterList: Hamster[];
  nickname: string;
  seeds: number;
  start: number;
  time: number;
}
