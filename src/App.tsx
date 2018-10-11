import React from 'react';
import { hot } from 'react-hot-loader';

import Video from './lib/components/Video';
import videoRedux from './lib/hocs/videoRedux';

import Controls from './components/Controls';

const SyncedVideo = videoRedux({ id: 'test' })(Video);

const App = () => (
  <>
    <h1>Hello from video-redux!</h1>
    <SyncedVideo
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      controls
    />
    <Controls />
  </>
);

export default hot(module)(App);
