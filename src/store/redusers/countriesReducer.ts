import { ActionType, CountriesStateType, DetailsCountryType } from 'store/types';
import { searchCountry } from 'utils/searchCountry';

const initialState: CountriesStateType = {
  countries: [],
  filteredCountries: [],
  country: {} as DetailsCountryType,
  countryName: '',
  region: '',
};

export const countriesReducer = (
  state: CountriesStateType = initialState,
  action: ActionType,
): CountriesStateType => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload.countries };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload.country };
    case 'FILTER_COUNTRIES':
      return {
        ...state,
        region: action.payload.region,
        countryName: action.payload.countryName,
        filteredCountries: searchCountry(
          state.countries,
          action.payload.region,
          action.payload.countryName
        )
      };
    default:
      return state;
  }
};
