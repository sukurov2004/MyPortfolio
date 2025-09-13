//!Burger menu linke girende menu baglamaq

  const navbarCollapse = document.getElementById("navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Link kliklənəndə bağlansın
  document.querySelectorAll(".navbar-collapse .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  // Kənara kliklənəndə bağlansın
  document.addEventListener("click", (e) => {
    if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(e.target) && // klik menyunun içində deyil
      !navbarToggler.contains(e.target)      // klik burger düyməsində deyil
    ) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });



//!Project section

const projects = [
  {
    id: 1,
    title: "Coffee Shop",
    description: "Landing page built with HTML, CSS, and JavaScript. Clean and stylish design focused on UX.",
    image: "image/Coffee.png",
    url: "https://coffee-demo-six.vercel.app/"
  },
  {
    id: 2,
    title: "Playoff Lounge Restaurant",
    description: "Modern website with smooth animations and interactive elements, built with HTML, CSS, JS.",
    image: "image/PlayOff.png",
    url: "https://play-off-demo.vercel.app/"
  },
  {
    id: 3,
    title: "Veb Dizayn Landing Page",
    description: "Responsive landing page built with Bootstrap framework.",
    image: "image/VebDizayn.png",
    url: "https://veb-dizayn-demo.vercel.app/"
  }
];

// HTML-ə doldurmaq
const projectsRow = document.getElementById("projects-row");

projects.slice(0, 3).forEach((project) => {
  const col = document.createElement("div");
  col.classList.add("col-md-4", "mb-4");

  col.innerHTML = `
    <div class="card h-100 shadow-sm rounded-4">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold">${project.title}</h5>
        <p class="card-text flex-grow-1">${project.description}</p>
        <a href="${project.url}" target="_blank" class="btn btn-outline-dark mt-3">View Live</a>
      </div>
    </div>
  `;

  projectsRow.appendChild(col);
});




  // ! Arrow-up
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}