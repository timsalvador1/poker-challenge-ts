import fs from 'fs';
import readline from 'readline';
import { isOnePair } from './isOnePair';
import { isTwoPair } from './isTwoPair';
import { isThreeOfKind } from './isThreeOfKind';
import { isFullHouse } from './isFullHouse';
import { isStraight } from './isStraight';
import { isRoyalFlush } from './isRoyalFlush';
import { isStraightFlush } from './isStraightFlush';
import { isFourOfKind } from './isFourOfKind';
import { isFlush } from './isFlush';
import { cardsOrder } from './cardsOrder';

const PLAYER_1 = "P1";
const PLAYER_2 = "P2";

const results = { 'P1': 0, 'P2': 0 };

export const handRanking = (hand: string[]): number => {
  let returnValue: number = 0;
  if (isRoyalFlush(hand)) {
    returnValue = 10;
  } else if (isStraightFlush(hand)) {
    returnValue = 9;
  } else if (isFourOfKind(hand)[0]) {
    returnValue = 8;
  } else if (isFullHouse(hand)) {
    returnValue = 7;
  } else if (isFlush(hand)) {
    returnValue = 6;
  } else if (isStraight(hand)) {
    returnValue = 5;
  } else if (isThreeOfKind(hand)[0]) {
    returnValue = 4;
  } else if (isTwoPair(hand)[0]) {
    returnValue = 3;
  } else if (isOnePair(hand)[0]) {
    returnValue = 2;
  } else {
    returnValue = 1;
  }
  return returnValue
}

export const compareHands = (x: any, y: any): string => {
  const list1 = x.sort((a: any, b: any) => b - a);
  const list2 = y.sort((a: any, b: any) => b - a);
  let returnValue: string = ''
  for (let i = 0; i < x.length; i += 1) {
    if (list1[i] !== list2[i]) {
      if (list1[i] > list2[i]) {
        returnValue = PLAYER_1;
      } else if (list1[i] < list2[i]) {
        returnValue = PLAYER_2;
      }
      break;
    }
  }
  return returnValue
}

export const draw = (playerHand1: any, playerHand2: any, ranking: any) => {
  const values1 = playerHand1.map((v: any) => v[0]);
  const values2 = playerHand2.map((v: any) => v[0]);
  const values1OnlyNumbers = [];
  let returnValue = '';
  for (let i = 0; i < values1.length; i += 1) {
    values1OnlyNumbers.push(cardsOrder[values1[i]]);
  }
  const values2OnlyNumbers = [];
  for (let i = 0; i < values2.length; i += 1) {
    values2OnlyNumbers.push(cardsOrder[values2[i]]);
  }

  if (ranking === 9 || ranking === 6 || ranking === 5 || ranking === 1) {
    return compareHands(values1OnlyNumbers, values2OnlyNumbers);
  }

  if (ranking === 2) {
    const response1: any = isOnePair(playerHand1);
    const response2: any = isOnePair(playerHand2);
    let b1 = response1[1];
    let b2 = response2[1];
    b1 = cardsOrder[b1];
    b2 = cardsOrder[b2];
    if (b1 > b2) {
      returnValue = PLAYER_1;
    } else if (b1 < b2) {
      return PLAYER_2;
    } else if (b1 === b2) {
      const index1 = values1OnlyNumbers.indexOf(b1);
      values1OnlyNumbers.splice(index1, 1);
      const index2 = values2OnlyNumbers.indexOf(b2);
      values2OnlyNumbers.splice(index2, 1);
      return compareHands(values1OnlyNumbers, values2OnlyNumbers);
    }
    return returnValue
  }

  if (ranking === 3) {
    const response1: any = isTwoPair(playerHand1);
    const response2: any = isTwoPair(playerHand2);
    const b1 = response1[1];
    let c1 = response1[2];
    const b2 = response2[1];
    let c2 = response2[2];
    const b1a: any = cardsOrder[b1[0]];
    const b1b: any = cardsOrder[b1[1]];
    const b2a: any = cardsOrder[b2[0]];
    const b2b: any = cardsOrder[b2[1]];
    c1 = cardsOrder[c1];
    c2 = cardsOrder[c2];
    const b1Numbers = [b1a, b1b].sort();
    const b2Numbers = [b2a, b2b].sort();
    if (b1Numbers[0] > b2Numbers[0]) {
      returnValue = PLAYER_1;
    } else if (b1Numbers[0] < b2Numbers[0]) {
      returnValue = PLAYER_2;
    } else if (b1Numbers[1] > b2Numbers[1]) {
      returnValue = PLAYER_1;
    } else if (b1Numbers[1] < b2Numbers[1]) {
      returnValue = PLAYER_2;
    } else if (c1 > c2) {
      returnValue = PLAYER_1;
    } else if (c1 < c2) {
      returnValue = PLAYER_2;
    }
    return returnValue
  }

  if (ranking === 4) {
    const response1: any = isThreeOfKind(playerHand1);
    const response2: any = isThreeOfKind(playerHand2);

    let b1 = response1[1];
    let b2 = response2[1];

    b1 = cardsOrder[b1];
    b2 = cardsOrder[b2];

    if (b1 > b2) {
      returnValue = PLAYER_1;
    } else if (b1 < b2) {
      returnValue = PLAYER_2;
    }
    return returnValue
  }

  if (ranking === 7) {
    const response1: any = isThreeOfKind(playerHand1);
    const response2: any = isThreeOfKind(playerHand2);

    let b1 = response1[1];
    let b2 = response2[1];

    const response3: any = isOnePair(playerHand1);
    const response4: any = isOnePair(playerHand2);
    let d1 = response3[1];
    let d2 = response4[1];

    b1 = cardsOrder[b1];
    b2 = cardsOrder[b2];
    d1 = cardsOrder[d1];
    d2 = cardsOrder[d2];

    if (b1 > b2) {
      returnValue = PLAYER_1;
    } else if (b1 < b2) {
      returnValue = PLAYER_2;
    } else if (d1 > d2) {
      returnValue = PLAYER_1;
    } else if (d1 < d2) {
      returnValue = PLAYER_2;
    }
    return returnValue
  }

  if (ranking === 8) {
    const response1: any = isFourOfKind(playerHand1);
    const response2: any = isFourOfKind(playerHand2);

    let b1 = response1[1];
    let b2 = response2[1];

    b1 = cardsOrder[b1];
    b2 = cardsOrder[b2];

    if (b1 > b2) {
      returnValue = PLAYER_1;
    } else if (b1 < b2) {
      returnValue = PLAYER_2;
    }
  }
  return returnValue
}

export const main = async () => {

  const fileStream = fs.createReadStream('bin/poker-hands.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const P1_cards: string[] = line.split(" ").slice(0, 5);
    const P2_cards: string[] = line.split(" ").slice(5);
    if (handRanking(P1_cards) > handRanking(P2_cards)) {
      results[PLAYER_1] += 1;
    } else if (handRanking(P1_cards) < handRanking(P2_cards)) {
      results[PLAYER_2] += 1;
    } else if (handRanking(P1_cards) === handRanking(P2_cards)) {
      let ranking = handRanking(P1_cards);
      const winner = draw(P1_cards, P2_cards, ranking);
      if (winner === PLAYER_1) {
        results[PLAYER_1] += 1;
      } else if (winner === PLAYER_2) {
        results[PLAYER_2] += 1;
      }
    }
  }
  console.log(`\nPlayer1: ${results[PLAYER_1]} \n\nPlayer2: ${results[PLAYER_2]}\n`);
};

main();