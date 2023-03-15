import { CountryType } from 'store/types';

export const searchCountry = (countries: CountryType[], region: string, countryName: string) => {
  let data = [...countries];

  if (region) {
    data = data.filter(country => country.region.includes(region));
  }

  if (countryName) {
    data = data.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()));
  }

  return data;
}
