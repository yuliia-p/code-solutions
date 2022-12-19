function defineSuit(card) {
  const result = (card[card.length - 1] === '♣')
    ? 'clubs'
    : (card[card.length - 1] === '♦')
        ? 'diamonds'
        : (card[card.length - 1] === '♥')
            ? 'hearts'
            : (card[card.length - 1] === '♠')
                ? 'spades'
                : 0;
  return result;
}
defineSuit('Q♠');
defineSuit('9♦');
defineSuit('J♥');
