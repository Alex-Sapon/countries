import { ActionType, AppStateType } from 'store/types';

const initialState: AppStateType = {
  theme: 'light',
};

export const appReducer = (
  state: AppStateType = initialState,
  action: ActionType
): AppStateType => {
  switch (action.type) {
    case 'CHANGE_APP_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};
