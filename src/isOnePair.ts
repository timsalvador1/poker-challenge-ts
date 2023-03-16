export const filterPair = (object: any) => {
    if (object[1] === 2) {
        return object[0]
    }
    return null;
}

export const isOnePair = (hand: string[]): [boolean, string | null] => {
    const values = hand.map((v: string) => v[0]);
    const valueCounter = values.reduce((acc: any, v: any) => {
        acc[v] = (acc[v] || 0) + 1;
        return acc;
    }, {});
    const returnValue: any[] = Object.entries(valueCounter).filter(filterPair);
    if (returnValue.length > 0) {
        return [true, returnValue[0][0]];
    }
    return [false, null];
}