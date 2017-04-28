import React, { Component } from 'react';

import {
  flickrImages,
  shutterStockVideos,
} from '../API/api';

class MediaGalleryPage extends Component {
  async componentDidMount() {
    const images = await flickrImages('rain');
    const videos = await shutterStockVideos('rain');

    console.log(images, videos);
  }

  render() {
    return <div>TODO</div>;
  }
}

export default MediaGalleryPage;
