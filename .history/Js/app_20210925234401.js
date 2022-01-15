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

    console.log(escrowCanDo);


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
