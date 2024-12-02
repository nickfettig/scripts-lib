/* 
Weird shuffle question on coderpad. Thought I would crank it out real quick.
Idea is that the following shuffle technique is used and we want to guess
where the cards will end up:

I take the card from the top to start a second pile.
I take the next card from the top of the pile and put it under the second pile.
I take the next card from the top of the pile and put it on top of the second pile.
I repeat the last two steps until no card is in the first pile.

Also wanted to do some class/object stuff so this was a good exercise!

12/1/2024
*/


class Deck {

    /*
        IMPORTANT: the deck cards are listed from top to bottom:

        i.e. ["ace of clubs", "ace of diamonds", "ace of hearts"]
        the ace of clubs is at the top of the deck and the ace of hearts 
        is at the bottom

    */

    constructor() {
        this.cards = [];
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                this.cards.push(rank + " of " + suit)
            })
        })
    }

    shuffleNaive() {
        // Naive way O(N^2)

        let shuffledCards = [];
        while (this.cards.length > 0) {
            let currentCard = this.cards.shift();
            if (shuffledCards.length % 2 == 0) {
                shuffledCards.unshift(currentCard);
                // put to top
            } else {
                shuffledCards.push(currentCard);
                // put to bottom
            }
        }

        this.cards = shuffledCards;
    }

    shuffleSmart() {
        // faster way O(N)

        let copied_cards = [...this.cards];
        let to_place = copied_cards.length / 2 - 1;
        let card_counter = 0;

        while (card_counter < copied_cards.length) {
            let currentCard = copied_cards[card_counter]
            this.cards[to_place] = currentCard;

            // weird logic but it works -- maybe a more succinct way to do this?
            card_counter += 1;
            if (card_counter % 2 == 0) {
                to_place -= card_counter;
            } else {
                to_place += card_counter;
            }
        }
    }
}

function main() {
    let deck_one = new Deck()
    let deck_two = new Deck()

    deck_one.shuffleNaive()
    console.log(deck_one.cards)

    deck_two.shuffleSmart()
    console.log(deck_two.cards)

    // compare decks, convert to string first
    console.log(JSON.stringify(deck_one.cards) === JSON.stringify(deck_two.cards));

}

main()