import { OptionType } from 'components/select';

export const getOption = (value: string, options: OptionType[]) => {
  return value ? options.find(option => option.value === value) : '';
}
