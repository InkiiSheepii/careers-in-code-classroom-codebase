const promptSync = require('prompt-sync')({ sigint: true });
const decks = require('cards').decks;
const SUIT_SYMBOLS = {
  clubs: '♣',
  diamonds: '♦',
  spades: '♠',
  hearts: '♥',
};
function initializeCardRows() {
  const deck = new decks.StandardDeck();
  deck.shuffleAll();
  const cardRows = [];
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  cardRows.push(deck.draw(7));
  return cardRows;
}
function cardToSymbol(card) {
  return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}
function renderCardRows(cardRows) {
  cardRows.forEach(function (cardRow, i) {
    const cardSymbols = cardRow.map(cardToSymbol);
    const cardRowString = cardSymbols.join('\t');
    console.log(`Row ${i + 1}: ${cardRowString}`);
  });
}
function promptForRowIndex() {
  let rowNumber;
  while(!(rowNumber >= 1 && rowNumber <= 3)) {
    rowNumber = promptSync('Which row is your card in? ');
    rowNumber = parseInt(rowNumber);
  }
  return rowNumber - 1;
}
function reDealCardRows(cardRows, selectedRowIndex) {
  const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];
  const pileOfCards = [
    ...cardRows[0],
    ...selectedRow,
    ...cardRows[1],
  ];
  const newRows = [[], [], []];
  for (let i = 0; i < 21; i++) {
    newRows[i % 3].push(pileOfCards[i]);
  }
  // pileOfCards.forEach((card, i) => {
  //   newRows[i % 3].push(card);
  // });
  return newRows;
}