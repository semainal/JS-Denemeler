document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
      

        {
            name: "cake",
            img: 'images/cake.png'
        },

        {
            name: "cake",
            img: 'images/cake.png'
        },

        {
            name: "cheeseburger",
            img: 'images/cheeseburger.png'
        },
        {
            name: "cheeseburger",
            img: 'images/cheeseburger.png'
        },

        {
            name: "pasta",
            img: 'images/pasta.png'
        },
        {
            name: "pasta",
            img: 'images/pasta.png'
        },

        {
            name: "pizza",
            img: 'images/pizza.png'
        },
        {
            name: "pizza",
            img: 'images/pizza.png'
        },

        {
            name: "popcorn",
            img: 'images/popcorn.png'
        },
        {
            name: "popcorn",
            img: 'images/popcorn.png'
        },

        {
            name: "smoothie",
            img: 'images/smoothie.png'
        },
        {
            name: "smoothie",
            img: 'images/smoothie.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i<cardArray.length; i++) {
            let card = document.createElement("img")
            card.setAttribute("src","images/ice_cream.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {
        let cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match")
            cards[optionOneId].setAttribute("src","images/purple.png")
            cards[optionTwoId].setAttribute("src","images/purple.png")
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute("src","images/ice_cream.png")
            cards[optionTwoId].setAttribute("src","images/ice_cream.png")
            alert("Sorry, try again!")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations!! You found them all."

    }
    }


    
    
    

    function flipCard() {
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId);
        this.setAttribute("src",cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard();

})

