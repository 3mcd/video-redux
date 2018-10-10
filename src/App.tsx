import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Video from './lib/components/Video';

const App = () => (
  <Fragment>
    <h1>Hello from video-redux!</h1>
    <Video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      controls
    />
  </Fragment>
);

export default hot(module)(App);
