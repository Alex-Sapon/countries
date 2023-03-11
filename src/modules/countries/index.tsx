import { Card } from 'components/card';
import { Container } from 'components/container/styles';

import { CountriesWrapper } from './styles';

type CountrieType = {
  title: string;
  population: number;
  region: string;
  capital: string;
};

const countries: CountrieType[] = [
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
  { title: 'Germany', population: 40000, region: 'Europe', capital: 'Berlin' },
];

export const Countries = () => {
  return (
    <Container>
      <CountriesWrapper>
        {countries.map((countrie) => (
          <Card key={countrie.title} />
        ))}
      </CountriesWrapper>
    </Container>
  );
};
