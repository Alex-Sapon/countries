import { locationChangeAction } from 'redux-first-history/src/actions';
import {
  loading,
  loadCountriesSuccess,
  loadCountrySuccess,
  loadCountriesFailure,
  filterCountries,
  loadCountryByCode,
  changeTheme,
} from 'store/actions';
import { store } from 'store/index';

export type RootState = ReturnType<typeof store.getState>;

export type CountriesStateType = {
  countries: CountryType[];
  filteredCountries: CountryType[];
  country: DetailsCountryType;
  countryName: string;
  region: string;
  loading: boolean;
  error: string;
};

export type AppStateType = {
  theme: 'light' | 'dark';
};

export type ActionType =
  | ReturnType<typeof loading>
  | ReturnType<typeof loadCountriesSuccess>
  | ReturnType<typeof loadCountrySuccess>
  | ReturnType<typeof loadCountriesFailure>
  | ReturnType<typeof loadCountryByCode>
  | ReturnType<typeof changeTheme>
  | ReturnType<typeof filterCountries>;

export type CountryType = {
  altSpellings: string[];
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      hun: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
};

export type DetailsCountryResponseType = {
  altSpellings: string[];
  borders: string[];
  capital: string[];
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: {
    deu: string;
    fra: string;
    nld: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      deu: {
        official: string;
        common: string;
      };
      fra: {
        official: string;
        common: string;
      };
      nld: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};

export type DetailsCountryType = {
  img: { png: string; svg: string; alt: string };
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borders: string[] | string;
};

export type OptionType = {
  label: string | number;
  value: string | number;
};

export type ControlsType = {
  region: string;
  country: string;
  handleSearch: (regionName: string, countryName: string) => void;
  handleClose?: () => void;
};

export type LocationChangeType = ReturnType<typeof locationChangeAction>;
