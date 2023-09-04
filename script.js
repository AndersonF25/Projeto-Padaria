const divLeft = document.querySelectorAll(".js-left");
const divRight = document.querySelectorAll(".js-right");
const padeirosLeft = document.querySelectorAll(".js-padeiros-left");
const padeirosRight = document.querySelectorAll(".js-padeiros-right");
const h2Top = document.querySelector(".js-top");

const windowRight = window.innerHeight * 0.7;

function smoothLeft() {
  divLeft.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const aparent = itemTop - windowRight < 0;

    if (aparent) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });

  divRight.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const aparent = itemTop - windowRight < 0;

    if (aparent) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });

  padeirosLeft.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const aparent = itemTop - windowRight < 0;

    if (aparent) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });

  padeirosRight.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const aparent = itemTop - windowRight < 0;

    if (aparent) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });

  const itemTop = h2Top.getBoundingClientRect().top;
  const aparent = itemTop - windowRight < 0;

  if (aparent) {
    h2Top.classList.add("ativo");
  } else {
    h2Top.classList.remove("ativo");
  }
}

window.addEventListener("scroll", smoothLeft);
