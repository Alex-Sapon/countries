import { RootState } from 'store/types';

export const selectCountries = (state: RootState) => {
  return state.countriesReducer.countries;
};

export const selectFilteredCountries = (state: RootState) => {
  return state.countriesReducer.filteredCountries;
};

export const selectCountryName = (state: RootState) => {
  return state.countriesReducer.countryName;
};

export const selectRegion = (state: RootState) => {
  return state.countriesReducer.region;
};

export const selectCountry = (state: RootState) => {
  return state.countriesReducer.country;
};

export const selectPathname = (state: RootState) => {
  return state.router.location?.pathname;
};

export const selectLoading = (state: RootState) => {
  return state.countriesReducer.loading;
};

export const selectAppTheme = (state: RootState) => {
  return state.appReducer.theme;
};
