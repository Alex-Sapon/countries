import { PATH } from 'constants/paths';

import React from 'react';

import { Home } from 'pages/home';

const DetailsPage = React.lazy(() => import('pages/details'));
const NotFoundPage = React.lazy(() => import('pages/notFound'));

export const routes = [
  { path: PATH.HOME, page: <Home /> },
  { path: PATH.DETAILS, page: <DetailsPage /> },
  { path: PATH.NOT_FOUND, page: <NotFoundPage /> },
];
