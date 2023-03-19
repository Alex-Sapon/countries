import axios, { AxiosError } from 'axios';
import { loadCountriesFailure } from 'store/actions';

export const handleAppError = (error: AxiosError) => {
  const err = error as Error | AxiosError;

  if (error.name === 'CanceledError') {
    return loadCountriesFailure('');
  }

  if (axios.isAxiosError(err)) {
    return loadCountriesFailure(
      err.response?.data.error
        ? err.response?.data.error.message
        : err.response?.data.message
    );
  }

  return loadCountriesFailure(err.message);
};
