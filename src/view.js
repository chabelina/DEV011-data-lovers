// estas funciones son de ejemplo

export const renderItems = (data, percentage) => {
  const ul = document.getElementById("database-list");
  ul.innerHTML = ""; // Clear the list before populating it

  const h2 = document.getElementById("percentage-nonHuman");
  h2.innerHTML = `¿Sabías que? El porcentaje de personajes No-Humanos en las películas Ghibli es del ${percentage} %`;

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
  return ul.innerHTML;
};
