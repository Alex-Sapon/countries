import { PATH } from 'constants/paths';

import { Container } from 'components/container/styles';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <h2>Not Found</h2>
      <Link to={PATH.HOME}>GO HOME</Link>
    </Container>
  );
};

export default NotFound;
