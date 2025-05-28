//!Burger menu linke girende menu baglamaq
const navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".navbar-collapse .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

//!Project section

fetch("project.json")
  .then((response) => response.json())
  .then((projects) => {
    const projectsRow = document.getElementById("projects-row");

    projects.slice(0, 3).forEach((project) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "mb-4");

      col.innerHTML = `
    <div class="card h-100">
     <img src="${project.image}" class="card-img-top" alt="${project.title}">
     <div class="card-body d-flex flex-column">
      <h5 class="card-title">${project.title}</h5>
        <p class="card-text "> ${project.description} </p>
          <a href="${project.url}" target="_blank"  class="btn btn-outline-dark">View Live</a>
     </div>
    </div>
   `;

      projectsRow.appendChild(col);
    });
  })
  .catch((err) => console.error("Error loading projects:", err));



  // ! Arrow-up
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}