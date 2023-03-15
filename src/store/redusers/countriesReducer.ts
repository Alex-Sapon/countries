import { ActionType, CountriesStateType, CountryType } from 'store/types';
import { searchCountry } from 'utils/searchCountry';

const initialState: CountriesStateType = {
  countries: [],
  filteredCountries: [],
  country: {} as CountryType,
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
    case 'LOAD_COUNTRY_BY_NAME':
      return { ...state, countryName: action.payload.countryName };
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
