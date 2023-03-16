import { isFlush } from "./isFlush";
import { isStraight } from "./isStraight";

export const isStraightFlush = (hand: string[]): boolean => {
    if (isStraight(hand) && isFlush(hand)) {
        return true;
    }
    return false;
}