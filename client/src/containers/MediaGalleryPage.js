import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchMediaAction } from '../actions/mediaActions';

class MediaGalleryPage extends Component {
  // Dispatch searchMediaAction right after initial rendering
  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  render() {
    console.log('Images: ', this.props.images);
    console.log('Videos: ', this.props.videos);
    console.log('Selected Image: ', this.props.selectedImage);
    console.log('Selected Video: ', this.props.selectedVideo);
    return <div>TODO</div>;
  }
}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  videos: PropTypes.array,
  selectedImage: PropTypes.object,
  selectedVideo: PropTypes.object,
};

// Subscribe component to redux store and merge state
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo,
});

export default connect(mapStateToProps)(MediaGalleryPage);
