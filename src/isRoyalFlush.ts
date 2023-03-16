import { cardsOrder } from "./cardsOrder";
import { isFlush } from "./isFlush";
import { isStraight } from "./isStraight";

export const isRoyalFlush = (hand: string[]): boolean => {
    let values = hand.map((v: any) => v[0]);
    let rankings = values.map((v: any) => cardsOrder[v]);
    return (Math.min(...rankings) === 10 && isStraight(hand) && isFlush(hand));
}