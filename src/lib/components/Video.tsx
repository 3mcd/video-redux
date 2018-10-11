import React, { forwardRef } from 'react';

export type Props = {
  autoPlay?: boolean;
  controls?: boolean;
  crossOrigin?: string;
  height?: number | string;
  loop?: boolean;
  muted?: boolean;
  preload?: string;
  poster?: string;
  src?: string;
  width?: number | string;
  playsInline?: boolean;
};

export type Ref = HTMLVideoElement;

const Video = forwardRef<Ref, Props>((props, ref) => (
  <video {...props} ref={ref} />
));

Video.defaultProps = {
  autoPlay: false,
  controls: false,
  crossOrigin: undefined,
  height: undefined,
  loop: false,
  muted: false,
  preload: undefined,
  poster: undefined,
  src: undefined,
  width: undefined,
  playsInline: false,
};

Video.displayName = 'Video';

export default Video;
