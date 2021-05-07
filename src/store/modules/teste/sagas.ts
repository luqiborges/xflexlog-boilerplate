import { takeLatest, call, put, all, select } from 'redux-saga/effects';

export function* teste() {
  yield console.log('sagas OK');
}

export default all([takeLatest('teste/setKey', teste)]);
