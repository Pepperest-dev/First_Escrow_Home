const escrow = {
  firstEscrowList: [
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
  ],
  threeBoxContent: [
    {
      imgUrl: "/assets/imgs/parcelBox.png",
      bgImgUrl: "/assets/imgs/darkGreenCardBg.png",
      boxTitle: "We verify the product",
      boxTextContent:
        "All items being purchased must be documented with specific details (colour, size, delivery date, sample photo) which the seller must consent to.",
    },
    {
      imgUrl: "/assets/imgs/parcelBox.png",
      bgImgUrl: "/assets/imgs/darkGreenCardBg.png",
      boxTitle: "We verify the product",
      boxTextContent:
        "All items being purchased must be documented with specific details (colour, size, delivery date, sample photo) which the seller must consent to.",
    },
    {
      imgUrl: "/assets/imgs/parcelBox.png",
      bgImgUrl: "/assets/imgs/darkGreenCardBg.png",
      boxTitle: "We verify the product",
      boxTextContent:
        "All items being purchased must be documented with specific details (colour, size, delivery date, sample photo) which the seller must consent to.",
    },
  ],
};

Object.freeze(escrow);
console.log(escrow.firstEscrowList);

document.addEventListener(
  "DomContentLoaded",
  (function () {
    console.log("escrow, content");
    const hambugger = document.querySelector("#hambugger");
    const menu = document.querySelector("#menuToggler");
    const escrowCanDo = document.querySelector("#FirstEscrowCanDo");

    let returnedList = escrow.firstEscrowList
      .map(
        (list) =>
          `<li class="flex items-start my-3 justify-start"><img  src=${list.icon} alt="checked icon" class="mr-5 h-6 w-6" /> ${list.text}</li>`
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
