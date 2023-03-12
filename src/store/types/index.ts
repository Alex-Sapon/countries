import { setCountries } from 'store/actions';
import { store } from 'store/index';

export type RootState = ReturnType<typeof store.getState>;

export type ActionType = ReturnType<typeof setCountries>

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
