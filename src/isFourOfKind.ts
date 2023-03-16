export const isFourOfKind = (hand: string[]): [boolean, string[] | null] => {
    const values = hand.map((v: any) => v[0]);
    const valueCounter = new Map();
    for (let i = 0; i < values.length; i += 1) {
        if (valueCounter.has(values[i])) {
            valueCounter.set(values[i], valueCounter.get(values[i]) + 1);
        } else {
            valueCounter.set(values[i], 1);
        }
    }
    for (let [key, value] of valueCounter) {
        if (value === 4) {
            return [true, key];
        }
    }
    return [false, null];
}