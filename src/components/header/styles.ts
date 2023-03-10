import { PATH } from 'constants/paths';

import styled from 'styled-components';

export const HeaderStyled = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-bg);
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

export const Title = styled.a.attrs({
  href: PATH.HOME,
})`
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;
