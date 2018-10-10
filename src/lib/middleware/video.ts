import { Middleware, Dispatch } from 'redux';

import { Action, PLAY, PAUSE } from '../redux/actions';
import { State as VideoState } from '../redux/reducer';

type State = {
  video: VideoState;
};

const videoMiddleware = (): Middleware<
  {},
  State,
  Dispatch<Action>
> => store => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === PLAY) {
    document.getElementsByTagName('video')[0].play();
  } else if (action.type === PAUSE) {
    document.getElementsByTagName('video')[0].pause();
  }

  return next(action);
};

export default videoMiddleware;
