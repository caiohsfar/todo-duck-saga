import { all, takeLatest } from 'redux-saga/effects';

import { Types as TodosTypes } from '../ducks/todos';
import { addTodo } from './todos';

export default function* rootSaga() {
  yield all([takeLatest(TodosTypes.ADD_REQUEST, addTodo)]);
}