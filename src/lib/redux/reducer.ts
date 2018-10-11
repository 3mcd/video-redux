import { Reducer } from 'redux';

import { ON_PLAY, ON_PAUSE, INIT, DESTROY, Action } from './actions';

export type VideoState = { paused: boolean };

export type State = {
  [id: string]: VideoState;
};

export const INITIAL_STATE: State = {};
export const INITIAL_VIDEO_STATE: VideoState = { paused: true };

const reducer: Reducer<State, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        [action.meta.id]: INITIAL_VIDEO_STATE,
      };
    case DESTROY: {
      const nextState = { ...state };
      delete nextState[action.meta.id];
      return nextState;
    }
    case ON_PLAY:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          paused: false,
        },
      };
    case ON_PAUSE:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          paused: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
