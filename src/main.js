import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";


import data from "./data/ghibli/ghibli.js";

//console.log('DAT GHIBLI: ', data);

renderItems(data.films);
//const optionDirector= document.querySelector([value="Hayao Miyazaki"]);
//optionDirector.addEventListener("click", );
const hayaoMovies = filterData(data.films, "director", "Hayao Miyazaki");
console.log(hayaoMovies);
