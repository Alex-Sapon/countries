import {
  ActionType,
  CountriesStateType,
  DetailsCountryType,
} from 'store/types';
import { searchCountry } from 'utils/searchCountry';

const initialState: CountriesStateType = {
  countries: [],
  filteredCountries: [],
  country: {} as DetailsCountryType,
  countryName: '',
  region: '',
  loading: false,
  error: null,
};

export const countriesReducer = (
  state: CountriesStateType = initialState,
  action: ActionType
): CountriesStateType => {
  switch (action.type) {
    case 'LOAD_COUNTRIES_LOADING':
      return { ...state, loading: true };
    case 'LOAD_COUNTRIES_SUCCESS':
      return { ...state, countries: action.payload.countries, loading: false };
    case 'LOAD_COUNTRY_SUCCESS':
      return { ...state, country: action.payload.country, loading: false };
    case 'LOAD_COUNTRIES_FAILURE':
      return { ...state, error: action.payload.error, loading: false };
    case 'FILTER_COUNTRIES':
      return {
        ...state,
        region: action.payload.region,
        countryName: action.payload.country,
        filteredCountries: searchCountry(
          state.countries,
          action.payload.region,
          action.payload.country
        ),
      };
    default:
      return state;
  }
};
