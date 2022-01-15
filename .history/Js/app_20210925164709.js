const hambugger = document.querySelector("#hambugger");
console.log(hambugger);

const menu = document.querySelector("#menuToggler");

hambugger.addEventListener("click", () => {
  //Animate Links
  //   navLinks.classList.toggle("open");

  //   links.forEach((link) => {
  //     link.classList.toggle("fade");
  //   });
  console.log(menu);
  menu.classList.contains("fa-bars")
    ? () => {
        menu.classList.remove("fa-bars");

        menu.classList.add("fa-times");
      }
    : () => {
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars ");
      };

  //hambugger Animation
  hambugger.classList.toggle("toggle");
});
