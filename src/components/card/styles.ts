import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Image = styled.image`
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 25px;
  font-family: var(--family);
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-size: var(--fs-md);
`;

export const Subtitle = styled.p`
  margin-bottom: 5px;
  font-size: var(--fs-sm);
`;
