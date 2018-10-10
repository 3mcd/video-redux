import { Reducer } from 'redux';

import { PLAY, PAUSE, Action } from './actions';

export type State = {
  paused: boolean;
};

export const INITIAL_STATE: State = { paused: true };

const reducer: Reducer<State, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY:
      return { ...state, paused: false };
    case PAUSE:
    default:
      return { ...state, paused: true };
  }
};

export default reducer;
