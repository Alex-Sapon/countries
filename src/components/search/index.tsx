import { ChangeEvent } from 'react';

import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryName } from 'store/actions';
import { selectCountryName } from 'store/selectors';

import { SearchInput, SearchWrapper } from './styles';

export const Search = () => {
  const countryName = useSelector(selectCountryName);
  
  const dispatch = useDispatch();

  const searchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCountryName(event.currentTarget.value));
  }
  
  return (
    <SearchWrapper>
      <IoSearch />
      <SearchInput value={countryName} onChange={searchCountry} />
    </SearchWrapper>
  );
};
