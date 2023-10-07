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
  const cloneData = [...data];
  return cloneData.sort((a, b) => {
    // Convertir las cadenas a números
    const numA = Number(a[sortBy]);
    const numB = Number(b[sortBy]);

    // Realizar la comparación
    return sortOrder === "asc" ? numA - numB : numB - numA;
  });
};

export const computeStats = (data) => {
  const result = data.reduce((acc, item) => {
    const nonHumanCount = item.people.reduce((count, person) => {
      return count + (person.specie !== "Human" ? 1 : 0);
    }, 0);
    return acc + nonHumanCount;
  }, 0);
  //console.log("Nro de No Humanos: ", result);
  const totalCount = data.reduce((acc, item) => acc + item.people.length, 0);
  //console.log("Nro de Personajes: ", totalCount);
  const nonHumanPercentage = (result / totalCount) * 100;
  return parseFloat(nonHumanPercentage.toFixed(0));
};
