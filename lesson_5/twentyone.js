/*

2 Player game.  A deck of cards (52) (4 (2-10) King, Queen, Jack => 10 and Ace => 1 or 11)

Dealer starts with two cards (one unknown) and player starts with 2 cards.
Player goes first.
Player either hits or stays.
Hit meaning getting another card.
If card total is greater than 21 => bust, dealer wins.

Dealer goes second
If the dealer's total points are less than 17, he must hit and receive another card.
If the dealer has 17 points or more, he must stay.
Can hit or stay

Player closest to 21 wins, any player bust, the other player wins

Nouns:

Deck of Cards

Player
  Cards
Dealer
  Cards

Total

Verbs:

- HIT
- STAY

Organized:

Game
  Start

Card

Deck of Cards (Entity) 
  Deal

Player
  Cards
  Total
  Hit 
  Stay

Dealer
  Cards
  Total
  Hit
  Stay
*/


class Game {
  start() {
    this.welcome();

    while (true) {
      // Player's turn
      this.displayDealerHand();
      this.displayPlayerHand();

      this.playerMove();

      if (this.playerBusts()) {
        break;
      }

      if (this.playerStays()) {
        break;
      }
    }
    if (this.playerBusts() === false) {
      while(true) {
        // Dealer's turn
        this.displayDealerHands();
        
        this.dealerMove();

        if (this.dealerBusts()) {
          break;
        }

        if (this.dealerStay()) {
          break;
        }
      }
    }

    this.displayResult();
    

    this.goodBye();
  }
}

class Deck{
}

class Card {

}

class Participant {
  constructor() {
    this.bust = false;
    this.Score = 0;
  }

  hit() {

  }

  stay() {

  }
}

class Player extends Participant {
  constructor() {
    super();
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }
} 