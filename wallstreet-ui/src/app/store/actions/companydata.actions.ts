import { Action } from '@ngrx/store';
import { Point } from '../models/point.model';
import { Line } from '../models/line.model';

export const SET_TICKER = '[UI Interaction] Set Ticker';
export const SET_COMPANY_NAME = '[Service Result] Set Company Name';
export const SET_COMPANY_DATA = '[Service Result] Set Company Data';
export const COMPANY_DATA_ERROR = '[Service Result] Company Data Error';

export class SetTickerAction implements Action {
  readonly type = SET_TICKER;

  constructor(public payload: string) { }
}

export class SetCompanyNameAction implements Action {
  readonly type = SET_COMPANY_NAME;

  constructor(public payload: string) { }
}

export class SetCompanyDataAction implements Action {
  readonly type = SET_COMPANY_DATA;

  constructor(public payload: Line[]) { }
}

export class CompanyDataErrorAction implements Action {
  readonly type = COMPANY_DATA_ERROR;

  constructor() { }
}

export type CompanyDataActions
  = SetTickerAction
  | SetCompanyNameAction
  | SetCompanyDataAction
  | CompanyDataErrorAction;