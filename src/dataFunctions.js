// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  const filteredMovies = data.filter((item) => item[filterBy] === value);
  return filteredMovies;
};

export const anotherExample = () => {
  return [];
};
