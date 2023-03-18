import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: var(--color-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  font-family: var(--family);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  padding: 8px 20px;
  cursor: pointer;
  width: fit-content;
`;

export const Svg = styled(BsArrowLeft)`
  margin-right: 6px;
  font-size: var(--fs-md);
`;

export const Text = styled.span`
  font-size: var(--fs-sm);
`;
