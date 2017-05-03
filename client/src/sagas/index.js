import { fork } from 'redux-saga';

import watchSearchMedia from './watcher';

/**
 * Here, we register our matcher saga(s) and export the root Saga as
 * a single generator function
 */
export default function*() {
  yield fork(watchSearchMedia);
}
