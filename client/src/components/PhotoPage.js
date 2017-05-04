import React from 'react';
import PropTypes from 'prop-types';

// Extract images, onHandleSelectImage and selectedImage from props
const PhotoPage = ({ images, onHandleSelectImage, selectedImage }) => (
  <div className="col-md-6">
    <h2>Images</h2>
    <div className="selected-image">
      <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>

    <div className="image-thumbnail">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => {
            onHandleSelectImage(image);
          }}
        >
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
);

PhotoPage.propTypes = {
  images: PropTypes.array.isRequired,
  selecetedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired,
};

export default PhotoPage;
