import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as TodosActions } from '../ducks/todos';

export function* addTodo(action) {
    try {
        const { data } = yield call(api.post, `/todos`, action.payload.todo);

        yield put(TodosActions.addTodoSuccess(data));
        alert('Todo Adicionado com Sucesso');

    } catch (err) {
        yield put(TodosActions.addTodoFailure('Erro ao adicionar Todo!'));
        alert('Erro ao adicionar Todo!');
    }
}