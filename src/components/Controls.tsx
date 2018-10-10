import React from 'react';
import { connect } from 'react-redux';

import { play, pause } from '../lib/redux/actions';

type Props = {
  onPlayClick: () => void;
  onPauseClick: () => void;
};

const Controls: React.SFC<Props> = ({ onPlayClick, onPauseClick }) => (
  <>
    <button type="button" onClick={onPlayClick}>
      Play
    </button>
    <button type="button" onClick={onPauseClick}>
      Pause
    </button>
  </>
);

export default connect(
  undefined,
  dispatch => ({
    onPlayClick: () => {
      dispatch(play());
    },
    onPauseClick: () => {
      dispatch(pause());
    },
  }),
)(Controls);
