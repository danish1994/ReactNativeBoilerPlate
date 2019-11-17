import { takeLatest } from 'redux-saga/effects';
import { DECREMENT, INCREMENT } from './actions';

function* incrementCounter(action) {
    console.log(action);
}

function* decrementCounter(action) {
    console.log(action);
}

export default function* rootSaga() {
    yield takeLatest(INCREMENT, incrementCounter);
    yield takeLatest(DECREMENT, decrementCounter);
}
