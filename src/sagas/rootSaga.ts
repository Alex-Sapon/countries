import { all, call, spawn } from 'redux-saga/effects';
import { allCountriesWeather } from 'sagas/allCountriesSaga';
import { loadByCodeWatcher } from 'sagas/loadByCodeSaga';
import { searchByCountryWatcher } from 'sagas/searchByCountrySaga';

export function* rootSaga() {
  const sagas = [
    allCountriesWeather,
    searchByCountryWatcher,
    loadByCodeWatcher,
  ];

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
