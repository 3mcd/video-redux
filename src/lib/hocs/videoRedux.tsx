import React, { ComponentType, Component, createRef } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import partial from 'lodash.partial';

import { init, destroy } from '../redux/actions';

export type Props = {
  init: (instance: HTMLVideoElement) => void;
  destroy: () => void;
};

export type Config = {
  id: string;
};

const getDisplayName = (WrappedComponent: ComponentType<any>) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const videoRedux = (config: Config) => <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  class VideoReduxComponent extends Component<Props> {
    static displayName = `VideoRedux(${getDisplayName(WrappedComponent)})`;

    private videoRef = createRef<HTMLVideoElement>();

    componentDidMount() {
      this.props.init(this.videoRef.current!);
    }

    componentWillUnmount() {
      this.props.destroy();
    }

    render() {
      const { init: initProp, destroy: destroyProp, ...props } = this.props;

      return <WrappedComponent ref={this.videoRef} {...props} />;
    }
  }

  hoistNonReactStatics(VideoReduxComponent, WrappedComponent);

  const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
      {
        init: partial(init, config.id),
        destroy: partial(destroy, config.id),
      },
      dispatch,
    );

  return connect(
    undefined,
    mapDispatchToProps,
  )(VideoReduxComponent);
};

export default videoRedux;
