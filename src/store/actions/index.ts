import { CountryType } from 'store/types';export const setCountries = (countries: CountryType[]) => ({  type: 'SET_COUNTRIES',  payload: {    countries  }} as const);export const setCountryName = (countryName: string) => ({  type: 'LOAD_COUNTRY_BY_NAME',  payload: {    countryName  }} as const);export const filterCountries = (region: string, countryName: string) => ({  type: 'FILTER_COUNTRIES',  payload: {    region,    countryName  }} as const);export const loadAllCountries = () => ({  type: 'LOAD_ALL_COUNTRIES',} as const);