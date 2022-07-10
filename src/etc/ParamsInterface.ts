import { Hamster } from 'state/StateInterface';

export interface TitleHeaderInterface {
  text: string;
}

export interface CatchModalInterface {
  hamster: Hamster;
  setCatchHam: React.Dispatch<any>;
}
