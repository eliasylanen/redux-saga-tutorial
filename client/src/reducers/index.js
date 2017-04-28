import { combineReducers } from 'redux';

import images from './imageReducer.js';
import videos from './videoReducer.js';

const rootReducer = combineReducers({
  images,
  videos,
});

export default rootReducer;
