import { Link } from 'react-router-dom';
import { CountryType } from 'store/types';
import { numberWithCommas } from 'utils/numberWithCommas';

import {
  CardWrapper,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardImage,
} from './styles';

type CardType = {
  country: CountryType
}

export const Card = ({ country }: CardType) => {
  const { capital, region, population, flags, name } = country;

  return (
    <Link to={`country/${name.common}`}>
      <CardWrapper>
        <CardImage src={flags.svg} alt={flags.alt} />
        <CardBody>
          <CardTitle>{name.common}</CardTitle>
          <CardSubtitle>
            <b>Population:</b>{numberWithCommas(population)}
          </CardSubtitle>
          <CardSubtitle><b>Region:</b>{region}</CardSubtitle>
          <CardSubtitle><b>Capital:</b>{capital}</CardSubtitle>
        </CardBody>
      </CardWrapper>
    </Link>
  );
};
