import { Action } from '@ngrx/store';

export const SET_TICKER = '[UI Interaction] Set Ticker';
export const GET_COMPANY_NAME = '[Service Result] Get Company Name';
export const COMPANY_NOT_FOUND = '[Service Result] Company Not Found';

export class SetTickerAction implements Action {
  readonly type = SET_TICKER;

  constructor(public payload: string) { }
}

export class GetCompanyNameAction implements Action {
  readonly type = GET_COMPANY_NAME;

  constructor(public payload: string) { }
}

export class CompanyNotFoundAction implements Action {
  readonly type = COMPANY_NOT_FOUND;

  constructor() { }
}

export type CompanyDataActions
  = SetTickerAction
  | GetCompanyNameAction
  | CompanyNotFoundAction;