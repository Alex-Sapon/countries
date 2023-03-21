import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: var(--fs-2xl);
  margin-bottom: 20px;
`;

export const LinkHome = styled(Link)`
  font-size: var(--fs-xl);
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: indianred;
  }
`;
