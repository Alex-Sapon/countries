import { cacheTimeMs } from 'constants/cacheTimeMs';

import { AxiosError, AxiosResponse } from 'axios';
import { LOCATION_CHANGE } from 'redux-first-history';
import { call, fork, put, select, take } from 'redux-saga/effects';
import { loadCountrySuccess, loading } from 'store/actions';
import { selectPathname } from 'store/selectors';
import { DetailsCountryResponseType, LocationChangeType } from 'store/types';
import { fetchCountryWithCache } from 'utils/fetchWithCache';
import { handleAppError } from 'utils/handleAppError';

function* loadByCountry() {
  const name: string = yield select(selectPathname);

  yield put(loading());

  try {
    const { data }: AxiosResponse<DetailsCountryResponseType[]> = yield call(
      fetchCountryWithCache,
      name.split('/')[2],
      cacheTimeMs
    );

    yield put(
      loadCountrySuccess({
        img: data[0].flags,
        name: data[0].name.common,
        nativeName: data[0].altSpellings[1],
        population: data[0].population,
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital[0],
        topLevelDomain: data[0].tld,
        currencies: Object.keys(data[0].currencies),
        languages: Object.values(data[0].languages),
        borders: data[0].borders,
      })
    );
  } catch (error) {
    yield put(handleAppError(error as AxiosError));
  }
}

export function* searchByCountryWatcher() {
  while (true) {
    const action: LocationChangeType = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.includes('country')) {
      yield fork(loadByCountry);
    }
  }
}
