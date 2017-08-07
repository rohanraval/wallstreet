import { VisualizationsActions } from "../actions/visualizations.actions";
import * as fromVisualizations from "../actions/visualizations.actions";

import * as _ from 'lodash';
import { Point } from '../models/point.model';
import { Line } from '../models/line.model';

export interface State {
  year: number
};

export const initialState: State = {
  year: 2016
};

export function reducer(state = initialState, action: VisualizationsActions): State {
  switch (action.type) {
    case fromVisualizations.SET_YEAR: {
      return Object.assign({}, state, {
         year: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

export const getYear = (state: State) => state.year;