import { renderItems } from "./view.js";
import { filterData } from "./dataFunctions.js";
import { filterByGender } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
//import { renderFilteredMovies } from "./view.js";

import data from "./data/ghibli/ghibli.js";

//console.log('DAT GHIBLI: ', data);

const nonHumanSpeciesPercent = computeStats(data.films);

renderItems(data.films, nonHumanSpeciesPercent);

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
  const filteredMovies = filterByGender(
    data.films,
    "gender",
    genderOptions.value
  );
  //console.log(filteredMovies);
  renderItems(filteredMovies);
});

const sortOptions = document.querySelector("#sort-order");

sortOptions.addEventListener("change", () => {
  const sortedMovies = sortData(
    data.films, 
    "rt_score", 
    sortOptions.value
  );
  //console.log(sortedMovies);
  renderItems(sortedMovies);
});

const clearButton = document.querySelector("#button-clear");

clearButton.addEventListener("click", () => {
  renderItems(data.films);
});


