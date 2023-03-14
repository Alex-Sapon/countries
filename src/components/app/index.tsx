import { PATH } from 'constants/paths';

import React from 'react';

import { Header } from 'components/header';
import { Details } from 'pages/details';
import { Home } from 'pages/home';
import { NotFound } from 'pages/notFound';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.DETAILS} element={<Details />} />
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};
