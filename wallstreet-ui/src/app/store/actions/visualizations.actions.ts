import { Action } from '@ngrx/store';
import { Point } from '../models/point.model';
import { Line } from '../models/line.model';

export const SET_YEAR = '[UI Interaction] Set Year';

export class SetYearAction implements Action {
  readonly type = SET_YEAR;

  constructor(public payload: number) { }
}

export type VisualizationsActions
  = SetYearAction;