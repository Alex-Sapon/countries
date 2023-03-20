import { cacheTimeMs } from 'constants/cacheTimeMs';

import { api } from 'api/countries-api';

type CacheType = {
  [key: string]: {
    cacheTimer: number;
  };
};

const cache: CacheType = {};
let cacheTimer = 0;

const getCacheTimer = (time: number) => {
  const now = new Date().getTime();

  if (cacheTimeMs < now + time) {
    cacheTimer = now + time;
  }

  return cacheTimer;
};

export const fetchCountryWithCache = async (name: string, time: number) => {
  const now = new Date().getTime();

  if (!cache[name] || cache[name].cacheTimer < now) {
    cache[name] = {
      ...(await api.fetchByCountryName(name)),
      cacheTimer: getCacheTimer(time),
    };
  }

  return cache[name];
};

export const fetchCountryByCodeWithCache = async (
  code: string,
  time: number
) => {
  const now = new Date().getTime();

  if (!cache[code] || cache[code].cacheTimer < now) {
    cache[code] = {
      ...(await api.fetchByCode(code)),
      cacheTimer: getCacheTimer(time),
    };
  }

  return cache[code];
};
