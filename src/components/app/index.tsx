import { routes } from 'constants/routes';

import React, { Suspense } from 'react';

import { Header } from 'components/header';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {routes.map(({ page, path }) => (
            <Route key={path} path={path} element={page} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};
