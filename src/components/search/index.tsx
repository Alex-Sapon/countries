import { ChangeEvent } from 'react';

import { IoSearch } from 'react-icons/io5';
import { ControlsType } from 'store/types';

import { SearchInput, SearchWrapper } from './styles';

export const Search = ({ region, country, handleSearch }: ControlsType) => {
  const searchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(region, event.currentTarget.value);
  };

  return (
    <SearchWrapper>
      <IoSearch />
      <SearchInput value={country} onChange={searchCountry} />
    </SearchWrapper>
  );
};
