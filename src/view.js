// estas funciones son de ejemplo

export const renderItems = (data) => {
  const ul = document.getElementById("database-list");
  ul.innerHTML = ""; // Clear the list before populating it

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <strong>${item.title}</strong>
          <p>${item.description}</p>
          <p>Producer: ${item.producer}</p>
        `;
    ul.appendChild(li);
  });
  return ul.innerHTML
};
