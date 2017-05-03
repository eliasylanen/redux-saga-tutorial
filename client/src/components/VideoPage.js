import React from 'react';
import PropTypes from 'prop-types';

// Extract videos, onHandleSelectVideo and selectedVideo from props
const VideoPage = ({ videos, onHandleSelectVideo, selectedVideo }) => (
  <div className="col-md-6">
    <h2>Videos</h2>
    <div className="selected-video">
      <div key={selectedVideo.id}>
        <h6>{selectedVideo.description}</h6>
        <video
          controls
          src={selectedVideo.mediaUrl}
          alt={selectedVideo.description}
        />
      </div>
    </div>

    <div className="video-thumbnail">
      {videos.map((video, index) => (
        <div key={index} onClick={onHandleSelectVideo.bind(this, video)}>
          <video src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>
  </div>
);

VideoPage.propTypes = {
  videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired,
};

export default VideoPage;
