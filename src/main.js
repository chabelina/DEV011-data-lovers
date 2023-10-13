import { renderItems } from "./view.js";
import {
  filterData,
  filterByGender,
  sortData,
  computeStats,
} from "./dataFunctions.js";

import data from "./data/ghibli/ghibli.js";

const nonHumanSpeciesPercent = computeStats(data.films);
renderItems(data.films, nonHumanSpeciesPercent);

let filters = {
  director: null,
  gender: null,
  sortOrder: null,
};

function applyFilters() {
  let filteredMovies = [...data.films];

  if (filters.director) {
    filteredMovies = filterData(filteredMovies, "director", filters.director);
  }

  if (filters.gender) {
    filteredMovies = filterByGender(filteredMovies, "gender", filters.gender);
  }

  if (filters.sortOrder) {
    filteredMovies = sortData(filteredMovies, "rt_score", filters.sortOrder);
  }

  renderItems(filteredMovies, nonHumanSpeciesPercent);
}

const directorOptions = document.querySelector("#director-options");
directorOptions.addEventListener("change", () => {
  filters.director = directorOptions.value;
  applyFilters();
});

// Evento para el filtro de género
const genderOptions = document.querySelector("#gender-options");
genderOptions.addEventListener("change", () => {
  filters.gender = genderOptions.value;
  applyFilters();
});

// Evento para el filtro de orden
const sortOptions = document.querySelector("#sort-order");
sortOptions.addEventListener("change", () => {
  filters.sortOrder = sortOptions.value;
  applyFilters();
});

// Evento para el botón de limpiar
const clearButton = document.querySelector("#button-clear");
clearButton.addEventListener("click", () => {
  // Restablecer los filtros
  filters = {
    director: null,
    gender: null,
    sortOrder: null,
  };

  renderItems(data.films, nonHumanSpeciesPercent);
});