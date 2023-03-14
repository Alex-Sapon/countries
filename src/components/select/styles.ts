import { IoClose } from 'react-icons/io5';
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
} from 'react-select';
import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      backgroundColor: 'var(--color-ui-base)',
      color: 'var(--color-text)',
      border: 'none',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      padding: '5px',
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>
    ) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: state.isSelected
        ? 'var(--color-bg)'
        : 'var(--color-ui-base)',
      color: 'var(--color-text)',
    }),
  },
})`
  font-size: var(--fs-sm);
  font-family: var(--family);

  & > * {
    box-shadow: var(--shadow);
  }

  div[class=' css-1dimb5e-singleValue'] {
    color: var(--color-text);
  }

  & > div[class=' css-1nmdiq5-menu'] {
    background-color: var(--color-ui-base);
  }
`;

export const Close = styled(IoClose)`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  color: #cccccc;
  
  &:hover {
    color: #6e6e6f;
  }
`;
