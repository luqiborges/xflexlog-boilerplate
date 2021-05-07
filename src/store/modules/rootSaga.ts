import { all } from 'typed-redux-saga';

import teste from './teste/sagas';

export default function* rootReducer() {
  return yield* all([teste]);
}
