import { Action as ReduxAction } from '../types/redux';

export const PLAY = '@video-redux/PLAY';
export const PAUSE = '@video-redux/PAUSE';

export type PlayAction = ReduxAction<typeof PLAY>;
export type PauseAction = ReduxAction<typeof PAUSE>;

export const play = (): PlayAction => ({ type: PLAY });
export const pause = (): PauseAction => ({ type: PAUSE });

export type Action = PlayAction | PauseAction;
