// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  const filteredMovies = data.filter((item) => item[filterBy] === value);
  return filteredMovies;
};

export const filterByGender = (data, filterBy, value) => {
  let filteredFilms = [];
  data.forEach((film) => {
    // Access and manipulate the first character's "gender" data
    const firstCharacterGender = film.people[0][filterBy];
    
    if (firstCharacterGender === value) {
      filteredFilms.push(film);
    }

    // Log or manipulate the data as needed

  });
  return filteredFilms;
};
