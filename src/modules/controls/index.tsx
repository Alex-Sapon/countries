import { Container } from 'components/container/styles';
import { Input } from 'components/input';
import { Select } from 'components/select';

import { ControlsWrapper } from './styles';

export const Controls = () => {
  return (
    <Container>
      <ControlsWrapper>
        <Input />
        <Select />
      </ControlsWrapper>
    </Container>
  );
};
