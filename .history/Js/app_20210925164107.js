const hamburger = document.querySelector("#hamburgger");
console.log("hambuger");

const menu = document.querySelector("#menuToggler");

hamburger.addEventListener("click", () => {
  //Animate Links
  //   navLinks.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  menu.classList.contains("fa-bars")
    ? console.log("e dey")
    : console.log("commot am");

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
