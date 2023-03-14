import axios from 'axios';
import { CountryType } from 'store/types';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export const api = {
  fetchAllCountries(): Promise<CountryType[]> {
    return instance.get('all?fields=name,capital,flags,population,region');
  },
  fetchByCountryName(name: string): Promise<CountryType[]> {
    return instance.get(`name/${name}`);
  },
  fetchByRegion(region: string) {
    return instance.get(`region${region}`);
  },
  fetchByCode(codes: string[]) {
    return instance.get(`alpha?codes=${codes.join(',')}`);
  },
};
