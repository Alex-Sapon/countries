import { MouseEvent } from 'react';

import { Spinner } from 'components/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountryByCode } from 'store/actions';
import { selectCountry, selectLoading } from 'store/selectors';
import { numberWithCommas } from 'utils/numberWithCommas';

import {
  Description,
  Image,
  ItemList,
  List,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from './styles';

export const DetailsCard = () => {
  const {
    img,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = useSelector(selectCountry);

  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    dispatch(loadCountryByCode(event.currentTarget.innerText));
  };

  if (loading) return <Spinner />;

  return (
    <Wrapper>
      <Image src={img.svg} alt={img.alt} />
      <Description>
        <Title>{name}</Title>
        <Text>
          <Subtitle>
            <b>Native Name:</b>
            {nativeName}
          </Subtitle>

          <Subtitle>
            <b>Population:</b>
            {numberWithCommas(population)}
          </Subtitle>

          <Subtitle>
            <b>Region:</b>
            {region}
          </Subtitle>

          <Subtitle>
            <b>Sub Region:</b>
            {subregion}
          </Subtitle>

          <Subtitle>
            <b>Capital:</b>
            {capital}
          </Subtitle>

          <Subtitle>
            <b>Top Level Domain:</b>
            {topLevelDomain}
          </Subtitle>

          <Subtitle>
            <b>Currencies:</b>
            {currencies}
          </Subtitle>

          <Subtitle>
            <b>Languages:</b>
            <List>
              {languages.map((lang) => (
                <span key={lang}>{lang}</span>
              ))}
            </List>
          </Subtitle>
        </Text>

        <Subtitle>
          <b>Border Countries:</b>
          <List>
            {borders.length
              ? (borders as string[]).map((border) => (
                  <ItemList key={border} onClick={handleClick}>
                    {border}
                  </ItemList>
                ))
              : 'No have borders'}
          </List>
        </Subtitle>
      </Description>
    </Wrapper>
  );
};
