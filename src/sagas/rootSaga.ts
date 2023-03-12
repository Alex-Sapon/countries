import { all, call, spawn } from 'redux-saga/effects';
import { allCountriesWeather } from 'sagas/allCountriesSaga';

export function* rootSaga() {
  const sagas = [allCountriesWeather];

  const retrySaga = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          yield error;
        }
      }
    })
  );

  yield all(retrySaga);
}
