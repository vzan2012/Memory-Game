document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "architecture",
      img: "images/architecture.png",
    },
    {
      name: "builder",
      img: "images/builder.png",
    },
    {
      name: "color-palette",
      img: "images/color-palette.png",
    },
    {
      name: "concrete-mixer",
      img: "images/concrete-mixer.png",
    },
    {
      name: "cone",
      img: "images/cone.png",
    },
    {
      name: "helmet",
      img: "images/helmet.png",
    },
    {
      name: "architecture",
      img: "images/architecture.png",
    },
    {
      name: "builder",
      img: "images/builder.png",
    },
    {
      name: "color-palette",
      img: "images/color-palette.png",
    },
    {
      name: "concrete-mixer",
      img: "images/concrete-mixer.png",
    },
    {
      name: "cone",
      img: "images/cone.png",
    },
    {
      name: "helmet",
      img: "images/helmet.png",
    },
  ];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // Create the board
  let createBoard = () => {
    cardArray.map((cardDetail, index) => {
      let card = document.createElement("img");
      card.setAttribute("class", "img-block");
      card.setAttribute("src", "images/pattern.png");
      card.setAttribute("data-id", index);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    });
  };

  //   Check for Matches
  let checkForMatch = () => {
    let cards = document.querySelectorAll("img");
    const optionFirstId = cardsChosenId[0];
    const optionSecondId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionFirstId].setAttribute("src", "images/snow-pattern.png");
      cards[optionSecondId].setAttribute("src", "images/snow-pattern.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionFirstId].setAttribute("src", "images/pattern.png");
      cards[optionSecondId].setAttribute("src", "images/pattern.png");
      alert("Try Again !!!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.setAttribute("class", "styleformat");
      resultDisplay.textContent = "Great, You found them all";
    }
  };

  //   Flip Card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) setTimeout(checkForMatch, 500);
  }

  createBoard();
});
