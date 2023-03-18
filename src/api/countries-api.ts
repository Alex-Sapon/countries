import axios from 'axios';
import { CountryType, DetailsCountryResponseType } from 'store/types';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export const api = {
  fetchAllCountries(): Promise<CountryType[]> {
    return instance.get('all?fields=name,capital,flags,population,region');
  },
  fetchByCountryName(name: string): Promise<DetailsCountryResponseType[]> {
    return instance.get(
      `name/${name}?fields=flags,name,altSpellings,population,region,subregion,capital,tld,currencies,languages,borders`
    );
  },
  fetchByCode(codes: string[]) {
    return instance.get(`alpha?codes=${codes.join(',')}`);
  },
};
