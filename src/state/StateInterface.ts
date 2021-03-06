export interface LoginState {
  email: string;
  password: string;
  newAccount: boolean;
  nickname: string;
  init: boolean;
  pass: boolean;
}

export interface User {
  user: object;
  hamsterList: object;
  start: number;
}

export interface TimerState {
  time: number;
  currentTime: number;
}

export interface TimerReducerState extends TimerState {
  type: string;
}

export interface Hamster {
  name: string;
  description: string;
  catch: boolean;
}

export interface HamsterListState extends Array<Hamster> {
  CampbellRussian: Hamster;
  Djungarian: Hamster;
  Golden: Hamster;
  Pearl: Hamster;
  Roborovskii: Hamster;
  king: Hamster;
  muscle: Hamster;
  pudding: Hamster;
}

export interface seedGameInit {
  start: boolean;
  seeds: number;
}
