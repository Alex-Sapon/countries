import { filterCountries, setCountries, setCountryName } from 'store/actions';
import { store } from 'store/index';

export type RootState = ReturnType<typeof store.getState>;

export type CountriesStateType = {
  countries: CountryType[];
  filteredCountries: CountryType[];
  country: CountryType;
  countryName: string;
  region: string;
};

export type ActionType =
  | ReturnType<typeof setCountries>
  | ReturnType<typeof filterCountries>
  | ReturnType<typeof setCountryName>;

export type CountryType = {
  altSpellings: string[]
  capital: string[]
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: {
    common: string
    official: string
    nativeName: {
      hun: {
        official: string
        common: string
      }
    }
  }
  population: number
  region: string
}

export type OptionType = {
  label: string | number;
  value: string | number;
};

export type ControlsType = {
  region: string;
  country: string;
  handleSearch: (regionName: string, countryName: string) => void
  handleClose?: () => void
}
