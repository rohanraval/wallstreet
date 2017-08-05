import { Action } from '@ngrx/store';

export const SET_TICKER = '[UI Interaction] Set Ticker';

export class SetTickerAction implements Action {
  readonly type = SET_TICKER;

  constructor(public payload: string) { }
}

export type TickerActions
  = SetTickerAction;