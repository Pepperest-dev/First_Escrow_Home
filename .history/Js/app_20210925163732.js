console.log("First Escrow");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
  //Animate Links
//   navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});