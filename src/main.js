import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
//import { renderFilteredMovies } from "./view.js";

import data from "./data/ghibli/ghibli.js";

//console.log('DAT GHIBLI: ', data);

renderItems(data.films);
const directorOptions = document.querySelector("#director-options");

directorOptions.addEventListener("change", () => {
  const filteredMovies = filterData(
    data.films,
    "director",
    directorOptions.value
  );
  renderItems(filteredMovies);
});
  
const genderOptions = document.querySelector("#gender-options");

genderOptions.addEventListener("change", () => {
  const filteredMovies = filterData(
    data.films,
    "gender",
    genderOptions.value
  );
  console.log(filteredMovies);
  renderItems(filteredMovies);
});