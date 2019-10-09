export const hasKeyInObj = (
  key: string,
  obj: { [s: string]: any },
): boolean => {
  const [k, ...restOfK] = key.split('.');
  if (restOfK.length === 0) {
    return Object.keys(obj).some(ok => ok === k);
  }
  const nextObj = obj[k];
  if (!(nextObj instanceof Object)) {
    return false;
  }
  return hasKeyInObj(restOfK.join('.'), nextObj);
};
