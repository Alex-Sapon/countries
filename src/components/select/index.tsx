import { options } from 'constants/options';

import { ControlsType, OptionType } from 'store/types';
import { getOption } from 'utils/getOption';

import { Close, CustomSelect, SelectWrapper } from './styles';

export const Select = ({
  region,
  country,
  handleSearch,
  handleClose,
}: ControlsType) => {
  const onChangeRegion = (option: OptionType | unknown) => {
    handleSearch((option as OptionType).value as string, country);
  };

  return (
    <SelectWrapper>
      <CustomSelect
        placeholder="Filter by Region"
        isSearchable={false}
        options={options}
        value={getOption(region, options)}
        onChange={onChangeRegion}
      />
      <Close onClick={handleClose} />
    </SelectWrapper>
  );
};
