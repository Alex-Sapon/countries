import { PATH } from 'constants/paths';

import React from 'react';

import { Home } from 'pages/home';

const Details = React.lazy(() => import('pages/details'));
const NotFound = React.lazy(() => import('pages/notFound'));

export const routes = [
  { path: PATH.HOME, page: <Home /> },
  { path: PATH.DETAILS, page: <Details /> },
  { path: PATH.NOT_FOUND, page: <NotFound /> },
];
