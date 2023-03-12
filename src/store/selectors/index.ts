import { RootState } from 'store/types';

export const selectCountries = (state: RootState) => state.countriesReducer.countries;
