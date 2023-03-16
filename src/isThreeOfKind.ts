export const filterThreeOfKind = (object: any) => {
    if (object[1] === 3)
        return object[0]
    return null;
}

export const isThreeOfKind = (hand: string[]): [boolean, string | null] => {
    const values = hand.map((v: any) => v[0]);
    const valueCounter = values.reduce((acc: any, cur: any) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    const returnValue = Object.entries(valueCounter).filter(filterThreeOfKind);
    if (returnValue.length) {
        return [true, returnValue[0][0]];
    }
    return [false, null];
}