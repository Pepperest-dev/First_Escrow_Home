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
      imgUrl: "/assets/imgs/dollarCurrency.png",
      bgImgUrl: "/assets/imgs/yellowCardBg.png",
      boxTitle: "We protect your funds",
      boxTextContent:
        "All money paid is held in trust by FirstEscrow until the buyer has confirmed satisfaction with items delivered.",
    },
    {
      imgUrl: "/assets/imgs/greenShield.png",
      bgImgUrl: "/assets/imgs/lightGreenCardBg.png",
      boxTitle: "Describe the items",
      boxTextContent:
        "We only release money based on the instruction of the buyer. If the item does not meet the agreed expectation, the buyer has the right to stop release of funds to the seller.",
    },
  ],
};
Object.freeze(escrow);
document.addEventListener(
  "DomContentLoaded",
  (function () {
    console.log(escrow, "escrow, content");
    const { firstEscrowList, threeBoxContent } = escrow;
    const hambugger = document.querySelector("#hambugger");
    const menu = document.querySelector("#menuToggler");
    const escrowCanDo = document.querySelector("#FirstEscrowCanDo");
    const threeBoxes = document.querySelector("#threeBoxes");

    let returnedList = firstEscrowList
      .map(
        (list) =>
          `<li class="flex items-start my-3 justify-start"><img  src=${list.icon} alt="checked icon" class="mr-5 h-6 w-6" /> ${list.text}</li>`
      )
      .join(" ");

    escrowCanDo.innerHTML = returnedList;

    let boxesHtml = threeBoxContent
      .map(
        ({ imgUrl, bgImgUrl, boxTextContent, boxTitle }) => `<div
            style="background-image: url(${bgImgUrl})"
            class="box"
          >
            <div class="boxImage">
              <img src=${imgUrl} alt="Box Image" srcset="" />
            </div>
            <p class="boxTitle">We verify the product</p>
            <p class="boxTextContent">
              All items being purchased must be documented with specific details
              (colour, size, delivery date, sample photo) which the seller must
              consent to.
            </p>
          </div>`
      )
      .join("");

    threeBoxes.innerHTML = boxesHtml;

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
