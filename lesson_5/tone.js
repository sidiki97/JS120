let readline = require('readline-sync')



class Card {
  static SPECIAL = {
    'Jack' : 10,
    'Queen': 10,
    'King' : 10,
    'Ace' : 11
  }
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }

    display() {
        return `${this.rank} of ${this.suit}`
    }

    checkAce() {
      return this.rank === 'Ace';
    }

    getRankValue() {
      if (!Object.keys(Card.SPECIAL).includes(this.rank)) {
        return this.rank;
      } else{
        return Card.SPECIAL[this.rank];
      }
    }
  }
  
  class Deck {
    static SUITS = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    static RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    constructor() {

      this.deck = {};
      for (let i = 0; i < Deck.SUITS.length; i += 1) {
        this.deck[Deck.SUITS[i]] = [];
        for (let j = 0; j < Deck.RANKS.length; j += 1) {
            this.deck[Deck.SUITS[i]].push(Deck.RANKS[j]);
        }
      }

    }

    
  
    deal() {

      if (this.deckEmpty()) {
        this.newDeck();
      }
      
      let randomSuit = Object.keys(this.deck)[Math.floor(Math.random() * Object.keys(this.deck).length)];
      let randomRank = Math.floor(Math.random() * this.deck[randomSuit].length);

      let card = new Card(randomSuit, this.deck[randomSuit][randomRank]);

      this.deck[randomSuit].splice(randomRank, 1);
      // removing card from deck
      if (this.deck[randomSuit].length === 0) {
        delete this.deck[randomSuit];
      } 
      
      return card;
    }

    newDeck() {
      for (let i = 0; i < Deck.SUITS.length; i += 1) {
        this.deck[Deck.SUITS[i]] = [];
        for (let j = 0; j < Deck.RANKS.length; j += 1) {
            this.deck[Deck.SUITS[i]].push(Deck.RANKS[j]);
        }
      }
    }

    deckEmpty() {
      let cards = Object.keys(this.deck);
      if (cards.length === 0) {
        return true;
      }
    }

  }
  
  class Participant {
    constructor() {
      this.cards = [];
      this.sum = 0;
      this.busted = false;
    }

    addCard(card) {
      this.cards.push(card);
      
    }

    showCards() {
      this.cards.forEach(card => console.log(card.display()))
    }

    getSum() {
      return this.sum;
    }

    // bustCheck(sum) {
    //   if (sum > 21) {this.busted = true};
    // }

    sumCalc(sum) {
      this.cards.forEach(card => sum += card.getRankValue());
      
      if (sum > 21) {
        let i = 0;
        do{
          if (this.cards[i].checkAce()) {
            sum -= 10;
          }
          i += 1;
        } while (sum > 21 && i < this.cards.length);
      }

      // this.bustCheck(sum);

      return sum;
    }

    setSum() {
      this.sum = this.sumCalc(this.sum);
    }


    getSumWhileHitting() {
      return this.sumCalc(0);
    }
  
    getBusted() {
      return this.busted;
    }

    isBusted() {
      this.busted = this.getSumWhileHitting() > 21;
      return this.busted;
      
    }

    refresh(){
      this.cards = [];
      this.sum = 0;
      this.busted = false;
    }


}

class Player extends Participant{ 
  constructor() {
    super();
    this.money = 5;
  }

  deduct(){
    this.money -= 1;
  }

  add() {
    this.money += 1;
  }

  getMoney() {
    return this.money;
  }

  alertMinMoney() {
    return this.money === 0;
  }

  alertMaxMoney() {
    return this.money === 10;
  }
}

class Dealer extends Participant{
  constructor() {
    super();
  }
  initialShowCards() {
    console.log(this.cards[0].display());
    console.log('Other hidden');
  }

}
  

  
  class TwentyOneGame {
    constructor() {
      this.deck = new Deck();
      this.player = new Player();
      this.dealer = new Dealer();

    }
  
    start() {
      this.displayWelcomeMessage();

      while (true) {
        
        this.dealCards();
      
        this.showCards();
        this.playerTurn();

        this.dealerTurn();
        this.displayResult();
        

        console.log();

        console.log(`Current money: $ ${this.player.getMoney()}`)
        if (this.player.alertMaxMoney() || this.player.alertMinMoney()) break;

        let again = readline.question('Would you like to play again (y/n)? ');
        if (again === 'n') break;

        this.refreshPlayerHands();
        
      }

      this.displayGoodbyeMessage();

    }
  
    refreshPlayerHands() {
      this.player.refresh();
      this.dealer.refresh();
    }

    dealCards() {

      for (let i = 0; i < 2; i += 1) {
        this.player.addCard(this.deck.deal());
        this.dealer.addCard(this.deck.deal());
      }

    }
  
    showCards() {
      console.log();
      console.log('Players cards: ');
      this.player.showCards();
      console.log();
      console.log('Dealer cards: ');
      this.dealer.initialShowCards()

    }

    static validMove(move) {
      while (!"HS".includes(move)) {
        console.log();
        move = readline.question('That is not a valid move.  Please input either H or S: ')
      }

      return move;
    }
  
    playerTurn() {
      console.log();

      console.log(`Player's Total Points: ${this.player.getSumWhileHitting()}`);
      
      console.log();
      
      let move = readline.question('Do you want to Hit(H) or Stay(S)? ');
      
      // Add validation for move

      move = TwentyOneGame.validMove(move);

      while (move === 'H') {

        let card = this.deck.deal();
        this.player.addCard(card);

        console.log();

        console.log('Players cards: ');
        this.player.showCards();
        console.log();
        console.log(`Player's Total Points: ${this.player.getSumWhileHitting()}`);
        console.log();
        if (this.player.isBusted()) {
          console.log('BUSTED')
          break;
        }

        console.log();
        move = readline.question('Do you want to Hit(H) or Stay(S)? ')
        move = TwentyOneGame.validMove(move);
      }

      this.player.setSum();

      console.log(`Player's Total Points:${this.player.getSum()}`);
      

    }
  
    dealerTurn() {

      if (!this.player.getBusted()) {
        console.log();


        this.dealer.showCards();
        let sum = this.dealer.getSumWhileHitting();
        console.log();
        console.log(`Dealer Point Total: ${sum}`);
  
        console.log();
  
        while (sum < 17) {
          this.dealer.addCard(this.deck.deal());
          console.log();
          this.dealer.showCards();
          console.log();
          if (this.dealer.isBusted()) {
            console.log("Dealer Busted!")
            break;
          }


          sum = this.dealer.getSumWhileHitting();
          console.log(`Dealer Point Total: ${sum}`);
        }
        this.dealer.setSum();
  
        
      }
      
    }
  
    displayWelcomeMessage() {
      console.log('Welcome to 21!');
    }
  
    displayGoodbyeMessage() {
      console.log('Thanks for playing! Goodbye!');
    }

    dealerWon() {
      console.log();
      console.log("Dealer won the game.");
      console.log(`Dealer Point Total: ${this.dealer.getSum()}`);
      console.log(`Player's Total Points:${this.player.getSum()}`);
      this.player.deduct();
    }

    playerWon() {
      console.log();
      console.log("Player won the game!");
      console.log(`Player's Total Points:${this.player.getSum()}`);
      console.log(`Dealer Point Total: ${this.dealer.getSum()}`);
      this.player.add();
    }
  
    displayResult() {
      if (this.player.getBusted()) {
        this.dealerWon();
      } else if (this.dealer.getBusted()) {
        this.playerWon();
      } else if (this.dealer.getSum() > this.player.getSum()) {
        this.dealerWon();
      } else if (this.dealer.getSum() < this.player.getSum()) {
        this.playerWon();
      } else {
        console.log();
        console.log("It's a tie. ;)")
      }
    }
  }


  
  let game = new TwentyOneGame();
  game.start();