import initialState from './initialState';
import types from '../constants/actionTypes';

// Handles video actions
const videos = (stateVideos = initialState.videos, action) => {
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...stateVideos, action.videos];
    case types.SELECTED_VIDEO:
      return { ...stateVideos, selectedVideo: action.video };
    default:
      return stateVideos;
  }
};

export default videos;
