import { api } from 'api/countries-api';
import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { setCountries } from 'store/actions';
import { CountryType } from 'store/types';

function* loadAllCountries() {
  const response: AxiosResponse<CountryType[]> = yield call(api.fetchAllCountries);
  
  yield put(setCountries(response.data));
}

export function* allCountriesWeather() {
  yield fork(loadAllCountries);
  yield takeEvery('LOAD_ALL_COUNTRIES', loadAllCountries);
}
