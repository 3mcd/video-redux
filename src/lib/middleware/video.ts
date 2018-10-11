import { Middleware, Dispatch } from 'redux';

import {
  Action,
  PLAY,
  PAUSE,
  SEEK,
  INIT,
  DESTROY,
  onPlay,
  onPause,
  onTimeUpdate
} from '../redux/actions';
import { State as VideoState } from '../redux/reducer';

type State = {
  video: VideoState;
};

// TODO: remove event listeners
const detachEvents = (instance: HTMLVideoElement) => {};

const attachEvents = (
  instance: HTMLVideoElement,
  id: string,
  dispatch: Dispatch,
) => {
  instance.addEventListener('play', () => {
    dispatch(onPlay(id));
  });

  instance.addEventListener('pause', () => {
    dispatch(onPause(id));
  });

  instance.addEventListener('timeupdate', () => {
    dispatch(onTimeUpdate(id, instance.currentTime));
  });
};

const videoMiddleware = (): Middleware<{}, State> => {
  const instanceMap: { [id: string]: HTMLVideoElement } = {};

  return store => next => (action: Action) => {
    switch (action.type) {
      case INIT:
        instanceMap[action.meta.id] = action.payload.instance;
        attachEvents(action.payload.instance, action.meta.id, store.dispatch);
        break;
      case DESTROY:
        detachEvents(instanceMap[action.meta.id]);
        delete instanceMap[action.meta.id];
        break;
      case PLAY:
        instanceMap[action.meta.id].play();
        break;
      case PAUSE:
        instanceMap[action.meta.id].pause();
        break;
      case SEEK:
        instanceMap[action.meta.id].currentTime = action.payload.to;
        break;
    }

    return next(action);
  };
};

export default videoMiddleware;
