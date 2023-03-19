import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 450px) {
    height: 250px;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 40px;
  align-items: center;
`;

export const Text = styled.article`
  display: grid;
  gap: 10px 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  font-weight: var(--fw-light);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
  }
`;

export const Title = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-sm);

  b {
    min-width: fit-content;
    margin-right: 8px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ItemList = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 5px 15px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--color-ui-base);
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: none;
  }
`;
