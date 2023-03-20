import { IoArrowUp } from 'react-icons/io5';
import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  z-index: 900;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  right: 40px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--color-bg);
  color: var(--color-bg);
  background-color: var(--color-ui-button-up);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Svg = styled(IoArrowUp)`
  font-size: 22px;
`;
