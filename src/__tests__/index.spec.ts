import { isOnePair } from '../isOnePair';
import { isTwoPair } from '../isTwoPair';
import { isThreeOfKind } from '../isThreeOfKind';
import { isFullHouse } from '../isFullHouse';
import { isFlush } from '../isFlush';
import { isFourOfKind } from '../isFourOfKind';
import { isRoyalFlush } from '../isRoyalFlush';
import { isStraight } from '../isStraight';

describe("isOnePair Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isOnePair(['5S', '9S', '2D', '7C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be true", () => {
    expect(isOnePair(['5S', '9S', '3D', '6C', '6H'])[0]).toBe(true);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be true", () => {
    expect(isOnePair(['5S', '9S', '9D', '6C', '6H'])[0]).toBe(true);
  });
});

describe("isTwoPair Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isTwoPair(['5S', '9S', '2D', '7C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isTwoPair(['5S', '9S', '3D', '6C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be true", () => {
    expect(isTwoPair(['5S', '9S', '9D', '6C', '6H'])[0]).toBe(true);
  });
});

describe("isThreeOfKind Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isThreeOfKind(['5S', '9S', '2D', '7C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isThreeOfKind(['5S', '9S', '3D', '6C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isThreeOfKind(['5S', '9S', '9D', '6C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be true", () => {
    expect(isThreeOfKind(['5S', '9S', '6D', '6C', '6H'])[0]).toBe(true);
  });
});

describe("isFullHouse Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFullHouse(['5S', '9S', '2D', '7C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isFullHouse(['5S', '9S', '3D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFullHouse(['5S', '9S', '9D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be false", () => {
    expect(isFullHouse(['5S', '9S', '6D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '5D', '6D', '6C', '6H'] to be true", () => {
    expect(isFullHouse(['5S', '5D', '6D', '6C', '6H'])).toBe(true);
  });
});

describe("isFlush Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFlush(['5S', '9S', '2D', '7C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isFlush(['5S', '9S', '3D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFlush(['5S', '9S', '9D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be false", () => {
    expect(isFlush(['5S', '9S', '6D', '6C', '6H'])).toBe(false);
  });
  it("['2D', '9C', 'AS', 'AH', 'AC'] to be false", () => {
    expect(isFlush(['2D', '9C', 'AS', 'AH', 'AC'])).toBe(false);
  });
  it("['2D', '9D', 'AD', '7D', 'QD'] to be true", () => {
    expect(isFlush(['2D', '9D', 'AD', '7D', 'QD'])).toBe(true);
  });
});

describe("isFourOfKind Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFourOfKind(['5S', '9S', '2D', '7C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isFourOfKind(['5S', '9S', '3D', '6C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isFourOfKind(['5S', '9S', '9D', '6C', '6H'])[0]).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be false", () => {
    expect(isFourOfKind(['5S', '9S', '6D', '6C', '6H'])[0]).toBe(false);
  });
  it("['2D', '9C', 'AS', 'AH', 'AC'] to be false", () => {
    expect(isFourOfKind(['2D', '9C', 'AS', 'AH', 'AC'])[0]).toBe(false);
  });
  it("['2D', '9D', 'AD', '7D', 'QD'] to be false", () => {
    expect(isFourOfKind(['2D', '9D', 'AD', '7D', 'QD'])[0]).toBe(false);
  });
  it("['2D', '2S', '2C', '2H', 'QD'] to be true", () => {
    expect(isFourOfKind(['2D', '2S', '2C', '2H', 'QD'])[0]).toBe(true);
  });
});

describe("isRoyalFlush Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isRoyalFlush(['5S', '9S', '2D', '7C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isRoyalFlush(['5S', '9S', '3D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isRoyalFlush(['5S', '9S', '9D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be false", () => {
    expect(isRoyalFlush(['5S', '9S', '6D', '6C', '6H'])).toBe(false);
  });
  it("['2D', '9C', 'AS', 'AH', 'AC'] to be false", () => {
    expect(isRoyalFlush(['2D', '9C', 'AS', 'AH', 'AC'])).toBe(false);
  });
  it("['2D', '9D', 'AD', '7D', 'QD'] to be false", () => {
    expect(isRoyalFlush(['2D', '9D', 'AD', '7D', 'QD'])).toBe(false);
  });
  it("['2D', '2S', '2C', '2H', 'QD'] to be false", () => {
    expect(isRoyalFlush(['2D', '2S', '2C', '2H', 'QD'])).toBe(false);
  });
  it("['2D', '3S', '4C', '5H', '6D'] to be false", () => {
    expect(isRoyalFlush(['2D', '3S', '4C', '5H', '6D'])).toBe(false);
  });
  it("['2D', '3D', '4D', '5D', '6D'] to be false", () => {
    expect(isRoyalFlush(['2D', '3D', '4D', '5D', '6D'])).toBe(false);
  });
  it("['TD', 'JD', 'QD', 'KD', 'AD'] to be true", () => {
    expect(isRoyalFlush(['TD', 'JD', 'QD', 'KD', 'AD'])).toBe(true);
  });
});

describe("isStraight Test Suite", () => {
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isStraight(['5S', '9S', '2D', '7C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '3D', '6C', '6H'] to be false", () => {
    expect(isStraight(['5S', '9S', '3D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '9D', '6C', '6H'] to be false", () => {
    expect(isStraight(['5S', '9S', '9D', '6C', '6H'])).toBe(false);
  });
  it("['5S', '9S', '6D', '6C', '6H'] to be false", () => {
    expect(isStraight(['5S', '9S', '6D', '6C', '6H'])).toBe(false);
  });
  it("['2D', '9C', 'AS', 'AH', 'AC'] to be false", () => {
    expect(isStraight(['2D', '9C', 'AS', 'AH', 'AC'])).toBe(false);
  });
  it("['2D', '9D', 'AD', '7D', 'QD'] to be false", () => {
    expect(isStraight(['2D', '9D', 'AD', '7D', 'QD'])).toBe(false);
  });
  it("['2D', '2S', '2C', '2H', 'QD'] to be false", () => {
    expect(isStraight(['2D', '2S', '2C', '2H', 'QD'])).toBe(false);
  });
  it("['2D', '3D', '4D', '5D', '6D'] to be true", () => {
    expect(isStraight(['2D', '3D', '4D', '5D', '6D'])).toBe(true);
  });
});
