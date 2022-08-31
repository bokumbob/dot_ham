import { UserItem } from './VaraiableInterface';
import { FunctionComponent } from 'react';
import { Hamster } from 'state/StateInterface';

export interface TitleHeaderInterface {
  text: string;
  none?: boolean;
}

export interface CatchModalInterface {
  hamster: Hamster;
  setHamPop: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DefaultB {
  setHamPop: React.Dispatch<React.SetStateAction<boolean>>;
  hamPop: boolean;
  firstState: boolean;
}

export interface Time {
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SeedGameTouchBoxInterface {
  clickCount: (click: any) => void;
  dispatch: React.Dispatch<any>;
}

export interface SeedGamePopInterface {
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export interface NextBtnInt {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

export interface DF {
  hamPop: boolean;
}

export interface RankingItem {
  data: UserItem;
  rank: number;
}

export interface RankingChange {
  change: boolean;
}
