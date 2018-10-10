import React from 'react';

interface VideoProps {
  autoPlay?: boolean;
  controls?: boolean;
  crossOrigin?: 'anonymous' | 'use-credentials';
  height?: number | string;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto' | '';
  poster?: string;
  src?: string;
  width?: number | string;
  playsInline?: boolean;
}

const Video: React.SFC<VideoProps> = props => <video {...props} />;

Video.defaultProps = {
  autoPlay: false,
  controls: false,
  crossOrigin: undefined,
  height: undefined,
  loop: false,
  muted: false,
  preload: 'metadata',
  poster: undefined,
  src: undefined,
  width: undefined,
  playsInline: false,
};

export default Video;
