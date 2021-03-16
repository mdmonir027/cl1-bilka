export const subString = (string, length = 50) => {
  if (!string) return null;
  if (string.length >= length) return `${string.substr(0, length)}...`;
  return string;
};
