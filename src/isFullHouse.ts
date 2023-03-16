import { isOnePair } from "./isOnePair";
import { isThreeOfKind } from "./isThreeOfKind";

export const isFullHouse = (hand: string[]): boolean => {
    if (isOnePair(hand)[0] && isThreeOfKind(hand)[0]) {
        return true;
    }
    return false;
}