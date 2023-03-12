import { Card } from 'components/card';
import { Container } from 'components/container/styles';
import { useSelector } from 'react-redux';
import { selectCountries } from 'store/selectors';

import { CountriesWrapper } from './styles';

export const Countries = () => {
  const countries = useSelector(selectCountries);

  return (
    <Container>
      <CountriesWrapper>
        {countries.map(country => (
          <Card key={country.name.common} country={country} />
        ))}
      </CountriesWrapper>
    </Container>
  );
};
