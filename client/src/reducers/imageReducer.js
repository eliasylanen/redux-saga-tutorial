import initialState from './initialState';
import types from '../constants/actionTypes';

// Handles image actions
const images = (stateImages = initialState.images, action) => {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...stateImages, action.images];
    case types.SELECTED_IMAGE:
      return { ...stateImages, selectedImage: action.image };
    default:
      return state;
  }
};

export default images;
