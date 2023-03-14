import styled from 'styled-components';

export const SearchWrapper = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--color-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 350px;
  padding: 5px 20px;
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a details...',
})`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: var(--fs-sm);
  color: var(--color-text);
  background-color: var(--color-ui-base);
`;
