// estas funciones son de ejemplo

export const renderItems = (data) => {
  const ul = document.getElementById("database-list");
  ul.innerHTML = ""; // Clear the list before populating it

  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("cards");
    
    li.innerHTML = `
          <img src= "${item.poster}" width="203" height="290">
          <h3>${item.title}</h3>
          <p>(${item.release_date})</p>
        `;
    ul.appendChild(li);
  });
  return ul.innerHTML
};

//function viewFilteredData = (hayaoMovies) => {}

