import { ActionType, CountryType } from 'store/types';

const initialState: StateType = {
  countries: [],
  country: {} as CountryType,
  countryName: '',
  region: ''
};

export const countriesReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload.countries };
    case 'LOAD_COUNTRY_BY_NAME':
      return { ...state, countryName: action.payload.countryName };
    case 'CHANGE_REGION':
      return { ...state, region: action.payload.region };
    default:
      return state;
  }
};

type StateType = {
  countries: CountryType[];
  country: CountryType;
  countryName: string;
  region: string;
};
