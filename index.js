document.addEventListener('DOMContentLoaded',() => {

    //card option
    const cardArray = [
        {
            name: 'conch',
            img: 'images/ConchSm.png'
        },
        {
            name: 'coral',
            img: 'images/CoralSm.png'
        },
        {
            name: 'conch',
            img: 'images/ConchSm.png'
        },
        {
            name: 'water plant',
            img: 'images/Water_PlantSm.png'
        },
        {
            name: 'oyster',
            img: 'images/OysterSm.png'
        }, 
       
        {
            name: 'shrimp',
            img: 'images/ShrimpSm.png'
        },
        {
            name: 'oyster',
            img: 'images/OysterSm.png'
        },
        {
            name: 'coral',
            img: 'images/CoralSm.png'
        },
        {
            name: 'water flower',
            img: 'images/Water_FlowerSm.png'
        },
        {
            name: 'shrimp',
            img: 'images/ShrimpSm.png'
        },
        {
            name: 'water flower',
            img: 'images/Water_FlowerSm.png'
        },
        {
            name: 'water plant',
            img: 'images/Water_PlantSm.png'
        },
    ]

    cardArray.sort(() => Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //create your board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/background-sm.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/OctopusSm.png')
            cards[optionTwoId].setAttribute('src', 'images/OctopusSm.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/background-sm.png')
            cards[optionTwoId].setAttribute('src', 'images/background-sm.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContext = 'Congratulations! You found them all!'
        }  
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
createBoard();
})