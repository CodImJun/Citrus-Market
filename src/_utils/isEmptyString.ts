export const isEmptyString = (string: string | null) => {
  return !string || !string.trim();
};
