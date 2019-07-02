import { call, put } from 'redux-saga/effects';
import api from 'services';
import { loadSucces, loadFailure } from './actions';

export function* load(){
    try {
        const response = yield call(api.get, '/users/lucas-marciano/repos');
        yield put(loadSucces(response.data));
    } catch(err) {
        yield put(loadFailure(err.message));
    }
}
