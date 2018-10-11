import { State } from '../types/redux';

export const getVideoById = (state: State, id: string) => state.video[id];

export const isPaused = (state: State, id: string) =>
  getVideoById(state, id).paused;
