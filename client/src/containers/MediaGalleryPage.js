import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  searchMediaAction,
  selectImageAction,
  selectVideoAction,
} from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';

import '../styles/style.css';

class MediaGalleryPage extends Component {
  // Dispatch searchMediaAction right after initial rendering
  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  handleSelectImage = selectedImage => {
    this.props.dispatch(selectImageAction(selectedImage));
  };

  handleSelectVideo = selectedVideo => {
    this.props.dispatch(selectVideoAction(selectedVideo));
  };

  handeSearch = event => {
    event.preventDefault();
    if (this.query) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = null;
    }
  };

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage && videos && selectedVideo
          ? <div>
              <input type="text" ref={ref => (this.query = ref)} />
              <input
                type="submit"
                className="btn btn-primary"
                value="Search library"
                onClick={this.handeSearch}
              />
              <div className="row">
                <PhotoPage
                  images={images}
                  selectedImage={selectedImage}
                  onHandleSelectImage={this.handleSelectImage}
                />
                <VideoPage
                  videos={videos}
                  selectedVideo={selectedVideo}
                  onHandleSelectVideo={this.handleSelectVideo}
                />
              </div>
            </div>
          : 'loading...'}
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
