import { put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import { loginApi } from "../../api/api";

export function* login(action) {
  try {
    yield put(loginRequest());

    const response = yield call(loginApi, action.payload);

    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("auth/login", login);
}
