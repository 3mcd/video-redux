import { combineReducers } from 'redux';

import video from '../../lib/redux/reducer';

export const rootReducer = combineReducers({
  state: (state: any = {}) => state,
  video,
});
