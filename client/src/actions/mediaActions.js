import types from '../constants/actionTypes';

// Returns SELECTED_IMAGE action type and selected image
export const selectImageAction = image => ({
  type: types.SELECTED_IMAGE,
  image,
});

// Returns SELECTED_VIDEO action type and selected video
export const selectVideoAction = video => ({
  type: types.SELECTED_VIDEO,
  video,
});

// Returns SEARCH_MEDIA_REQUEST action type and search criteria
export const searchMediaAction = payload => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload,
});
