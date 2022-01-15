const hambugger = document.querySelector("#hambugger");
const menu = document.querySelector("#menuToggler");

const firstEscrowList = [
  { icon: "", text: "Pay for goods/services bought online and offline" },
  { icon: "", text: "Pay for goods/services bought online and offline" },
  { icon: "", text: "Pay for goods/services bought online and offline" },
  { icon: "", text: "Pay for goods/services bought online and offline" },
];

hambugger.addEventListener("click", () => {
  if (menu.classList.contains("fa-bars")) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-times");
  } else if (menu.classList.contains("fa-times")) {
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
  }
  hambugger.classList.toggle("toggle");
});
