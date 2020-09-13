export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const getDate = (date) => {
  return date.split("T")[0];
};
