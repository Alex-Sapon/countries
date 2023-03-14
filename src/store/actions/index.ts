import { CountryType } from 'store/types';export const setCountries = (countries: CountryType[]) => ({  type: 'SET_COUNTRIES',  payload: {    countries  }} as const);export const setCountryName = (countryName: string) => ({  type: 'LOAD_COUNTRY_BY_NAME',  payload: {    countryName  }} as const);export const changeRegion = (region: string) => ({  type: 'CHANGE_REGION',  payload: {    region  }} as const);export const loadAllCountries = () => ({  type: 'LOAD_ALL_COUNTRIES',} as const);