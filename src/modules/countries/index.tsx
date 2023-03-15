import { Card } from 'components/card';
import { Container } from 'components/container/styles';
import { useSelector } from 'react-redux';
import {
  selectCountries,
  selectCountryName,
  selectFilteredCountries,
  selectRegion
} from 'store/selectors';

import { CountriesWrapper } from './styles';

export const Countries = () => {
  const countries = useSelector(selectCountries);
  const filteredCountries = useSelector(selectFilteredCountries);
  const region = useSelector(selectRegion);
  const countryName = useSelector(selectCountryName);

  return (
    <Container>
      <CountriesWrapper>
        {(region || countryName ? filteredCountries : countries).map(country => (
          <Card key={country.name.common} country={country} />
        ))}
      </CountriesWrapper>
    </Container>
  );
};
