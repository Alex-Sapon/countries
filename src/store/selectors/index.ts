import { RootState } from 'store/types';

export const selectCountries = (state: RootState) => state.countriesReducer.countries;
export const selectFilteredCountries = (state: RootState) => state.countriesReducer.filteredCountries;
export const selectCountryName = (state: RootState) => state.countriesReducer.countryName;
export const selectRegion = (state: RootState) => state.countriesReducer.region;

export const selectPathname = (state: RootState) => state.router.location?.pathname;
