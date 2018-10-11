import {
  MetaAction as ReduxMetaAction,
  PayloadMetaAction as ReduxPayloadMetaAction,
} from '../types/redux';

// actions to manage lifecycle
export const INIT = '@video-redux/INIT';
export const DESTROY = '@video-redux/DESTROY';

// actions to trigger <video> API methods
export const PLAY = '@video-redux/PLAY';
export const PAUSE = '@video-redux/PAUSE';

// actions in response to <video> events
export const ON_PLAY = '@video-redux/ON_PLAY';
export const ON_PAUSE = '@video-redux/ON_PAUSE';

type Meta = { id: string };
type MetaAction<T extends string> = ReduxMetaAction<T, Meta>;
type PayloadMetaAction<T extends string, P> = ReduxPayloadMetaAction<
  T,
  P,
  Meta
>;

export type InitPayload = { instance: HTMLVideoElement };

export type InitAction = PayloadMetaAction<typeof INIT, InitPayload>;
export type DestroyAction = MetaAction<typeof DESTROY>;

export type PlayAction = MetaAction<typeof PLAY>;
export type PauseAction = MetaAction<typeof PAUSE>;

export type OnPlayAction = MetaAction<typeof ON_PLAY>;
export type OnPauseAction = MetaAction<typeof ON_PAUSE>;

export const init = (id: string, instance: HTMLVideoElement): InitAction => ({
  type: INIT,
  meta: { id },
  payload: { instance },
});
export const destroy = (id: string): DestroyAction => ({
  type: DESTROY,
  meta: { id },
});

export const play = (id: string): PlayAction => ({ type: PLAY, meta: { id } });
export const pause = (id: string): PauseAction => ({
  type: PAUSE,
  meta: { id },
});

export const onPlay = (id: string): OnPlayAction => ({
  type: ON_PLAY,
  meta: { id },
});
export const onPause = (id: string): OnPauseAction => ({
  type: ON_PAUSE,
  meta: { id },
});

export type Action =
  | PlayAction
  | PauseAction
  | InitAction
  | DestroyAction
  | OnPlayAction
  | OnPauseAction;
