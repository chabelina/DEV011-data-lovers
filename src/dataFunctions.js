// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  const filteredMovies = data.filter((item) => item[filterBy] === value);
  return filteredMovies;
};

export const filterByGender = (data, filterBy, value) => {
  const filteredFilms = [];
  data.forEach((film) => {
    // Access and manipulate the first character's "gender" data
    const firstCharacterGender = film.people[0][filterBy];

    if (firstCharacterGender === value) {
      filteredFilms.push(film);
    }
  });
  return filteredFilms;
};

export const sortData = (data, sortBy, sortOrder) => {
  return data.sort((a, b) => {
    // Convertir las cadenas a números
    const numA = Number(a[sortBy]);
    const numB = Number(b[sortBy]);

    // Realizar la comparación
    return sortOrder === "asc" ? numA - numB : numB - numA;
  });
};
