import { api } from 'api/countries-api';
import { AxiosError, AxiosResponse } from 'axios';
import { push } from 'redux-first-history';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loadCountryByCode } from 'store/actions';
import { DetailsCountryResponseType } from 'store/types';
import { handleAppError } from 'utils/handleAppError';

function* loadByCodeSaga(action: ReturnType<typeof loadCountryByCode>) {
  try {
    const response: AxiosResponse<DetailsCountryResponseType[]> = yield call(
      api.fetchByCode,
      action.payload.code
    );

    if (response.status === 200 && response.data[0].name.common) {
      yield put(push(response.data[0].name.common));
    }
  } catch (error) {
    yield put(handleAppError(error as AxiosError));
  }
}

export function* loadByCodeWatcher() {
  yield takeLatest('LOAD_COUNTRY_BY_CODE', loadByCodeSaga);
}
