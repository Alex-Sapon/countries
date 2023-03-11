import styled from 'styled-components';

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--color-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 350px;
  padding: 5px 20px;
`;

export const CustomInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: var(--fs-sm);
  color: var(--color-text);
  background-color: var(--color-ui-base);
`;
