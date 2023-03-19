import { api } from 'api/countries-api';
import { AxiosResponse, AxiosError } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { loadCountriesSuccess } from 'store/actions';
import { CountryType } from 'store/types';
import { handleAppError } from 'utils/handleAppError';

function* loadAllCountries() {
  try {
    const response: AxiosResponse<CountryType[]> = yield call(
      api.fetchAllCountries
    );

    yield put(loadCountriesSuccess(response.data));
  } catch (error) {
    yield put(handleAppError(error as AxiosError));
  }
}

export function* allCountriesWeather() {
  yield fork(loadAllCountries);
  yield takeEvery('LOAD_ALL_COUNTRIES', loadAllCountries);
}
