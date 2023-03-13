import { Container } from 'components/container/styles';
import { Search } from 'components/search';
import { Select } from 'components/select';

import { ControlsWrapper } from './styles';

export const Controls = () => {
  return (
    <Container>
      <ControlsWrapper>
        <Search />
        <Select />
      </ControlsWrapper>
    </Container>
  );
};
