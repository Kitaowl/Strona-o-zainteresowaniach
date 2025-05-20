//Automatyczne ustwienie aktywnego linku w menu
const links = document.querySelectorAll(".menu a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  //Każdy link będzie się świecił innym kolorem, kiedy jest wybrany.
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
