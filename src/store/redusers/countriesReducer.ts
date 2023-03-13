import { ActionType, CountryType } from 'store/types';

const initialState: StateType = {
  countries: [],
  countryName: ''
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
    default:
      return state;
  }
};

type StateType = {
  countries: CountryType[];
  countryName: string;
};
