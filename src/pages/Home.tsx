import React from 'react';

import { Controls } from 'components/../modules/controls';
import { Header } from 'components/header';
import { Countries } from 'modules/countries';

export const Home = () => {
  return (
    <>
      <Header />
      <Controls />
      <Countries />
    </>
  );
};
