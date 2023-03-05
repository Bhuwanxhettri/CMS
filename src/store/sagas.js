import { all } from "redux-saga/effects";
import { login } from "../features/auth/authSaga";

export function* rootSaga() {
  yield all([login()]);
}
