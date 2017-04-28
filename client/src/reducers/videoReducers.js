import initialState from './initialState';
import types from '../constants/actionTypes';

// Handles video actions
const videos = (stateVideos = initialState.videos, action) => {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...stateVideos, action.videos];
    case types.SELECTED_IMAGE:
      return { ...stateVideos, selectedVideo: action.video };
    default:
      return state;
  }
};

export default videos;
