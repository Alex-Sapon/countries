import { ActionType, CountryType } from 'store/types';

const initialState: StateType = {
  countries: [],
};

export const countriesReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload.countries };
    default:
      return state;
  }
};

type StateType = {
  countries: CountryType[];
};
