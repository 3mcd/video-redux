import { Action as ReduxAction } from 'redux';

import { State as VideoState } from '../redux/reducer';

export interface Action<T extends string> extends ReduxAction<T> {}

export interface PayloadAction<T extends string, P> extends ReduxAction<T> {
  payload: P;
}

export interface MetaAction<T extends string, M> extends ReduxAction<T> {
  meta: M;
}

export interface PayloadMetaAction<T extends string, P, M>
  extends PayloadAction<T, P> {
  meta: M;
}

export interface ErrorAction<T extends string> extends PayloadAction<T, Error> {
  error: true;
}

export interface ErrorMetaAction<T extends string, M>
  extends PayloadMetaAction<T, Error, M> {
  error: true;
}

export interface State {
  video: VideoState;
}
