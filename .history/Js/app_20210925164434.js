const hambugger = document.querySelector("#hambugger");
console.log(hambugger);

const menu = document.querySelector("#menuToggler");

hambugger.addEventListener("click", () => {
  //Animate Links
  //   navLinks.classList.toggle("open");

  //   links.forEach((link) => {
  //     link.classList.toggle("fade");
  //   });
  menu.classList.contains("fa-bars")
        ? (console.log("e dey")) => {
        menu.classList.remove("fa-bars");
    }
    : console.log("commot am");

  //hambugger Animation
  hambugger.classList.toggle("toggle");
});
