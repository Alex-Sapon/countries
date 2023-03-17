import { api } from 'api/countries-api';
import { AxiosResponse } from 'axios';
import { LOCATION_CHANGE } from 'redux-first-history';
import { locationChangeAction } from 'redux-first-history/src/actions';
import { fork, take, select, call, put } from 'redux-saga/effects';
import { setCountry } from 'store/actions';
import { selectPathname } from 'store/selectors';
import { DetailsCountryType } from 'store/types';

export type LocationChangeType = ReturnType<typeof locationChangeAction>;

function* loadByCountry() {
  const name: string = yield select(selectPathname);

  const response: AxiosResponse<DetailsCountryType[]> = yield call(
    api.fetchByCountryName,
    name.split('/')[2],
  );

  yield put(setCountry(response.data[0]));
}

export function* searchByCountryWatcher() {
  while (true) {
    const action: LocationChangeType = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.includes('country')) {
      yield fork(loadByCountry);
    }
  }
}
