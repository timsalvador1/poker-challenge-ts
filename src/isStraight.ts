import { cardsOrder } from "./cardsOrder";

export const isStraight = (hand: string[]): boolean => {
    const values = hand.map((v: any) => v[0]);
    const valuesOnlyNumbers = values.map((i: any) => cardsOrder[i]);
    if (
        valuesOnlyNumbers.sort().toString() ===
        [...Array(Math.max(...valuesOnlyNumbers) - Math.min(...valuesOnlyNumbers) + 1)].map(
            (e, i) => i + Math.min(...valuesOnlyNumbers)
        ).toString()
    ) {
        return true;
    }
    return false;
}