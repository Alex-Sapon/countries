import { PATH } from 'constants/paths';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};
