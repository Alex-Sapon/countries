import { PATH } from 'constants/paths';

import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link to={PATH.HOME}>GO HOME</Link>
    </>
  );
};
