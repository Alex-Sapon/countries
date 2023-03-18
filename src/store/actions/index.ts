import { AxiosError } from 'axios';
import { CountryType, DetailsCountryType } from 'store/types';

export const loading = () => {
  return { type: 'LOAD_COUNTRIES_LOADING' } as const;
};

export const loadCountriesSuccess = (countries: CountryType[]) => {
  return { type: 'LOAD_COUNTRIES_SUCCESS', payload: { countries } } as const;
};

export const loadCountrySuccess = (country: DetailsCountryType) => {
  return { type: 'LOAD_COUNTRY_SUCCESS', payload: { country } } as const;
};

export const loadCountriesFailure = (error: AxiosError) => {
  return { type: 'LOAD_COUNTRIES_FAILURE', payload: { error } } as const;
};

export const filterCountries = (region: string, country: string) => {
  return { type: 'FILTER_COUNTRIES', payload: { region, country } } as const;
};
