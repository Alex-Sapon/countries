import { api } from 'api/countries-api';
import { AxiosResponse } from 'axios';
import { call, debounce, put, select } from 'redux-saga/effects';
import { loadAllCountries, setCountries } from 'store/actions';
import { selectCountryName } from 'store/selectors';
import { CountryType } from 'store/types';

function* loadByCountry() {
  const country: string = yield select(selectCountryName);

  if (country) {
    const response: AxiosResponse<CountryType[]> = yield call(
      api.fetchByCountryName,
      country
    );

    yield put(setCountries(response.data));
  } else {
    yield put(loadAllCountries());
  }
}

export function* searchByCountryWatcher() {
  yield debounce(600, 'LOAD_COUNTRY_BY_NAME', loadByCountry);
}
