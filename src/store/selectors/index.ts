import { RootState } from 'store/types';

export const selectCountries = (state: RootState) => state.countriesReducer.countries;
export const selectCountryName = (state: RootState) => state.countriesReducer.countryName;
