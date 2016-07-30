import React, { Component, PropTypes } from 'react';
import { SoundCloudContainer } from 'react-soundplayer/addons';
import Track from './Track';

export default class ProgressSoundPlayer extends Component {
  render() {
    const { resolveUrl, clientId } = this.props;
    return (
      <SoundCloudContainer resolveUrl={ resolveUrl } clientId={ clientId }>
        <Track/>
      </SoundCloudContainer>
    );
  }
}

ProgressSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
}
