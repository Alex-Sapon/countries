export const numberWithCommas = (value: number) => {
  if (value) {
    return String(value).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }
  return '';
};
