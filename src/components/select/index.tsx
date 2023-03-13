import { options } from 'constants/options';

import { CustomSelect } from './styles';

export const Select = () => {

  return (
    <CustomSelect
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      options={options}
    />
  );
};
