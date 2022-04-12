// BURGER________________________________

document.querySelector(".menu__icon").addEventListener("click", (event) => {
    document
      .querySelectorAll(".burger_line, .header__menu")
      .forEach((element) => element.classList.toggle("active"));
    document.querySelector("html").classList.toggle("lock");
  });





  if (window.matchMedia("(max-width: 1200px)").matches) {

    let cards = document.querySelectorAll('.section4__item_inner');

    cards.forEach((card) => card.addEventListener('touchend', flip));
    function flip(){
      
      let currentStyle = this.getAttribute("style");
      if (currentStyle=='transform: rotateY(180deg);') {
        this.style.transform = "rotateY(0deg)";
      } else {
        this.style.transform = "rotateY(180deg)";
      }

    }
  }


