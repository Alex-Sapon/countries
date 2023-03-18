import { locationChangeAction } from 'redux-first-history/src/actions';
import { filterCountries, setCountries, setCountry } from 'store/actions';
import { store } from 'store/index';

export type RootState = ReturnType<typeof store.getState>;

export type CountriesStateType = {
  countries: CountryType[];
  filteredCountries: CountryType[];
  country: DetailsCountryType;
  countryName: string;
  region: string;
};

export type ActionType =
  | ReturnType<typeof setCountries>
  | ReturnType<typeof setCountry>
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

export type DetailsCountryType = {
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
