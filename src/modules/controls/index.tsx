import { Container } from 'components/container/styles';
import { Search } from 'components/search';
import { Select } from 'components/select';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from 'store/actions';
import { selectCountryName, selectRegion } from 'store/selectors';

import { ControlsWrapper } from './styles';

export const Controls = () => {
  const dispatch = useDispatch();

  const region = useSelector(selectRegion);
  const country = useSelector(selectCountryName);

  const handleSearch = (regionName: string, countryName: string) => {
    dispatch(filterCountries(regionName, countryName));
  }

  const handleClose = () => dispatch(filterCountries('', country));
  
  return (
    <Container>
      <ControlsWrapper>
        <Search
          region={region}
          country={country}
          handleSearch={handleSearch}
        />
        <Select
          region={region}
          country={country}
          handleSearch={handleSearch}
          handleClose={handleClose}
        />
      </ControlsWrapper>
    </Container>
  );
};
