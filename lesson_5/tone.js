let readline = require('readline-sync')



class Card {
  static SPECIAL = {
    'Jack' : 10,
    'Queen': 10,
    'King' : 10,
    'Ace' : 11
  }
    constructor(suit, rank) {
      //STUB
      // What sort of state does a card need?
      // Rank? Suit? Points?
      this.suit = suit;
      this.rank = rank;
    }

    display() {
        return `${this.rank} of ${this.suit}`
    }

    getRankValue() {
      if (!Object.keys(Card.SPECIAL).includes(this.rank)) {
        return this.rank;
      } else{
        return Card.SPECIAL(this.rank);
      }
    }
  }
  
  class Deck {
    static SUITS = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    static RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    constructor() {
      //STUB
      // What sort of state does a deck need?
      // 52 Cards?
      // obviously, we need some data structure to keep track of cards
      // array, object, something else?
      this.deck = {};
      for (let i = 0; i < Deck.SUITS.length; i += 1) {
        this.deck[Deck.SUITS[i]] = [];
        for (let j = 0; j < Deck.RANKS.length; j += 1) {
            this.deck[Deck.SUITS[i]].push(Deck.RANKS[j]);
        }
      }

    }
  
    deal() {
      //STUB
      // does the dealer or the deck deal?

      let randomSuit = Object.keys(this.deck)[Math.floor(Math.random() * Object.keys(this.deck).length)];
      let randomRank = Math.floor(Math.random() * this.deck[randomSuit].length);

    //   console.log(`randomSuit: ${randomSuit} and randomRank: ${randomRank}`)

      let card = new Card(randomSuit, this.deck[randomSuit][randomRank]);

      this.deck[randomSuit].splice(randomRank, 1);
      // removing card from deck
      if (this.deck[randomSuit].length === 0) {
        delete this.deck[randomSuit];
      } 

      /*

      TODO:
      Handle empty deck

      */
      
      return card;
    }
  }
  
  class Participant {
    constructor() {
      //STUB
      // What sort of state does a participant need?
      // Score? Hand? Amount of money available?
      // What else goes here? all the redundant behaviors from Player and Dealer?
      this.cards = [];
    }

    addCard(card) {
      this.cards.push(card);
    }

    showCards() {
      this.cards.forEach(card => console.log(card.display()))
    }

    isBusted() {
      let sum = 0;
      this.cards.forEach(card => sum += card.getRankValue());
      if (sum > 21) {return true;}
      return false;
      
  }
}
  
  class Player extends Participant {
    constructor() {
        super();
      //STUB
      // What sort of state does a player need?
      // Score? Hand? Amount of money available?
    }
  
    hit() {
      //STUB
    }
  
    stay() {
      //STUB
    }
  
    isBusted() {
      //STUB
    }
  
    score() {
      //STUB
    }
  }
  
  class Dealer extends Participant {
    // Very similar to a Player; do we need this?
  
    constructor() {
      //STUB
      // What sort of state does a dealer need?
      // Score? Hand? Deck of cards? Bow tie?
      super();
    }
  
    hit() {
      //STUB
    }
  
    stay() {
      //STUB
    }
  
    isBusted() {
      //STUB
    }
  
    score() {
      //STUB
    }
  
    hide() {
      //STUB
    }
  
    showCards() {
      console.log(this.cards[0].display());
      console.log('Other hidden');
    }
  
    deal() {
      //STUB
      // does the dealer or the deck deal?
    }
  }
  
  class TwentyOneGame {
    constructor() {
      //STUB
      // What sort of state does the game need?
      // A deck? Two participants?
      this.deck = new Deck();
      this.player = new Player();
      this.dealer = new Dealer();

    }
  
    start() {
      //SPIKE
      this.displayWelcomeMessage();
      this.dealCards();
      
      this.showCards();
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
      this.displayGoodbyeMessage();
    }
  
    dealCards() {
      //STUB

      for (let i = 0; i < 2; i += 1) {
        this.player.addCard(this.deck.deal());
        this.dealer.addCard(this.deck.deal());
      }

    }
  
    showCards() {
      //STUB
      console.log();
      console.log('Players cards: ');
      this.player.showCards();
      console.log();
      console.log('Dealer cards: ');
      this.dealer.showCards()

    }
  
    playerTurn() {
      //STUB
      let move = readline.question('Do you want to Hit(H) or Stay(S)? ');
      
      // Add validation for move

      while (move === 'H') {
        this.player.addCard(this.deck.deal());
        console.log(this.player);
        if (this.player.isBusted()) {
          break;
        }
        move = readline.question('Do you want to Hit(H) or Stay(S)? ')
      }



    }
  
    dealerTurn() {
      //STUB
    }
  
    displayWelcomeMessage() {
      console.log('Welcome to 21!');
    }
  
    displayGoodbyeMessage() {
      //STUB
    }
  
    displayResult() {
      //STUB
    }
  }


  
  let game = new TwentyOneGame();
  game.start();