import { PATH } from 'constants/paths';

import { Container } from 'components/container/styles';

import { LinkHome, Title, Wrapper } from './styles';

export const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Not found</Title>
        <LinkHome to={PATH.HOME}>Go home</LinkHome>
      </Wrapper>
    </Container>
  );
};
