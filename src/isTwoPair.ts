export const isTwoPair = (hand: string[]): [boolean, string[] | null, number | null] => {
    const pairs: string[] = [];
    let nonPairValue: number = 0;
    const values: string[] = hand.map((v: any) => v[0]);
    const valueCounter = new Map();

    for (const value of values) {
        if (valueCounter.has(value)) {
            valueCounter.set(value, valueCounter.get(value) + 1);
        } else {
            valueCounter.set(value, 1);
        }
    }

    for (const [key, value] of valueCounter.entries()) {
        if (value === 2) {
            pairs.push(key);
        } else if (value === 1) {
            nonPairValue = key;
        }
    }

    if (pairs.length === 2) {
        return [true, pairs, nonPairValue];
    }
    return [false, null, null];
}