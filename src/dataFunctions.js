// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  const filteredMovies = data.filter((item) => item[filterBy] === value);
  return filteredMovies;
};



export const filterByGender = (data, filterBy, value) => {
  data.films.forEach((film) => {
    // Access and manipulate the first character's "gender" data
    const firstCharacterGender = film.people[0].gender;

    // Log or manipulate the data as needed
    console.log(
      `Film: ${film.title}, Protagonist Gender: ${firstCharacterGender}`
    );
  });
  return [];
};
