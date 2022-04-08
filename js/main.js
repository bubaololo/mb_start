// BURGER________________________________

document.querySelector(".menu__icon").addEventListener("click", (event) => {
    document
      .querySelectorAll(".line, .header__menu")
      .forEach((element) => element.classList.toggle("active"));
    document.querySelector("html").classList.toggle("lock");
  });

  // let cards = document.querySelectorAll('.flip-card-inner');

  // cards.forEach((card) => card.addEventListener('click', flip));
  // function flip(){
  //   this.classList.toggle('is-flipped');
  // }



