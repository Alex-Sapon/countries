import { CountryType, DetailsCountryType } from 'store/types';

export const setCountries = (countries: CountryType[]) => {
  return { type: 'SET_COUNTRIES', payload: { countries } } as const;
};

export const setCountry = (country: DetailsCountryType) => {
  return { type: 'SET_COUNTRY', payload: { country } } as const;
};

export const filterCountries = (region: string, countryName: string) => {
  return {
    type: 'FILTER_COUNTRIES',
    payload: { region, countryName },
  } as const;
};
