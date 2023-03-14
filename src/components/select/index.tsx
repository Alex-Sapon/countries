import { options } from 'constants/options';

import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from 'store/actions';
import { selectRegion } from 'store/selectors';
import { getOption } from 'utils/getOption';

import { Close, CustomSelect, SelectWrapper } from './styles';

export type OptionType = {
  label: string | number;
  value: string | number;
};

export const Select = () => {
  const dispatch = useDispatch();
  
  const region = useSelector(selectRegion);
  
  const onChangeRegion = (option: OptionType | unknown) => {
    dispatch(changeRegion((option as OptionType).value as string));
  }

  const handleClose = () => {
    dispatch(changeRegion(''));
  }

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
