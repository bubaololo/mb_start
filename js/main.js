// BURGER________________________________

document.querySelector(".menu__icon").addEventListener("click", (event) => {
    document
      .querySelectorAll(".line, .header__menu")
      .forEach((element) => element.classList.toggle("active"));
    document.querySelector("html").classList.toggle("lock");
  });