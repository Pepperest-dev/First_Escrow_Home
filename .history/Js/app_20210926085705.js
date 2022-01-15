const escrow = require("data.js");

console.log(escrow, "escrow, content");
document.addEventListener(
  "DomContentLoaded",
  (function () {
    const hambugger = document.querySelector("#hambugger");
    const menu = document.querySelector("#menuToggler");
    const escrowCanDo = document.querySelector("#FirstEscrowCanDo");

    const firstEscrowList = [
      {
        icon: "/assets/icons/greenChecked.png",
        text: "Pay for goods/services bought online and offline",
      },
      {
        icon: "/assets/icons/greenChecked.png",
        text: "Receive payments from customers without having an online store",
      },
      {
        icon: "/assets/icons/greenChecked.png",
        text: "Receive card/bank account payments from visitors to your social media pages (on Instagram and Facebook)",
      },
      {
        icon: "/assets/icons/greenChecked.png",
        text: "Get a free online store (with bank/card payment and reports dashboard included)",
      },
    ];

    let returnedList = firstEscrowList
      .map(
        (list) =>
          `<li class="flex my-3 justify-start"><img  src=${list.icon} alt="checked icon" class="mr-5" /> ${list.text}</li>`
      )
      .join(" ");

    escrowCanDo.innerHTML = returnedList;

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
  })()
);
