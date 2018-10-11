import { Reducer } from 'redux';

import { ON_PLAY, ON_PAUSE, ON_TIME_UPDATE, INIT, DESTROY, Action } from './actions';

export type VideoState = { currentTime: number, paused: boolean };

export type State = {
  [id: string]: VideoState;
};

export const INITIAL_STATE: State = {};
export const INITIAL_VIDEO_STATE: VideoState = { currentTime: 0, paused: true };

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
    case ON_TIME_UPDATE:
      return {
        ...state,
        [action.meta.id]: {
          ...state[action.meta.id],
          currentTime: action.payload.currentTime
        },
      };
    default:
      return state;
  }
};

export default reducer;
