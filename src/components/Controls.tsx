import React from 'react';
import { connect } from 'react-redux';

import { play, pause, seek } from '../lib/redux/actions';
import { getCurrentTime } from '../lib/redux/selectors';
import { State } from '../lib/types/redux';

type Props = {
  onPlayClick: () => void;
  onPauseClick: () => void;
  onRewindClick: () => void;
  onForwardClick: () => void;
  currentTime: number;
};

const Controls: React.SFC<Props> = ({ onPlayClick, onPauseClick, onRewindClick, onForwardClick, currentTime }) => (
  <>
    <button type="button" onClick={onPlayClick}>
      Play
    </button>
    <button type="button" onClick={onPauseClick}>
      Pause
    </button>
    <button type="button" onClick={onRewindClick}>
      -2s
    </button>
    <button type="button" onClick={onForwardClick}>
      +2s
    </button>
    <dl>
      <dt>Current Time</dt>
      <dd>{currentTime.toFixed(2)}s</dd>
    </dl>
  </>
);

export default connect(
  (state: State) => ({
    currentTime: getCurrentTime(state, 'test'),
  }),
  dispatch => ({
    onPlayClick: () => {
      dispatch(play('test'));
    },
    onPauseClick: () => {
      dispatch(pause('test'));
    },
    dispatch,
  }),
  (stateProps, { dispatch, ...dispatchProps }, ownProps) => ({
    onRewindClick: () => {
      dispatch(seek('test', stateProps.currentTime - 2));
    },
    onForwardClick: () => {
      dispatch(seek('test', stateProps.currentTime + 2));
    },
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  }),
)(Controls);
