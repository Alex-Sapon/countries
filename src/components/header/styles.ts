import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const SwitchMode = styled.div`
  display: flex;
  cursor: pointer;

  span {
    margin-left: 10px;
    text-transform: capitalize;
  }
`;

export const Title = styled(Link).attrs({
  to: PATH.HOME,
})`
  text-decoration: none;
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;
