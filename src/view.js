// estas funciones son de ejemplo

export const renderItems = (data, percentage=0) => {
  // const ul = document.getElementById("database-list");
  const main = document.getElementById("root");
  const ul = document.createElement('ul')
  ul.setAttribute('id', 'database-list')
  main.innerHTML = "";
  ul.innerHTML = ""; // Clear the list before populating it

  const h2 = document.getElementById("percentage-nonHuman");
  h2.innerHTML = `¿Sabías qué? El porcentaje de personajes No-Humanos en las películas Ghibli es del ${percentage} %`;
  
  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("cards");

    li.innerHTML = `
          <img src= "${item.poster}" width="203" height="290" class= "poster">
          <h3>${item.title}</h3>
          <p>(${item.release_date})</p>
        `;
    ul.appendChild(li);
  });
  return main.appendChild(ul);
};
