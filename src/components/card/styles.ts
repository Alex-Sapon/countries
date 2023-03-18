import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: var(--color-ui-base);
  color: var(--color-text);
  cursor: pointer;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-decoration: none;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  display: block;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
`;

export const CardBody = styled.div`
  padding: 25px;
  font-family: var(--family);
`;

export const CardTitle = styled.h3`
  margin-bottom: 15px;
  font-size: var(--fs-md);
`;

export const CardSubtitle = styled.p`
  margin-bottom: 5px;
  font-size: var(--fs-sm);

  b {
    margin-right: 5px;
  }
`;
