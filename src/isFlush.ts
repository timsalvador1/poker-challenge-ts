export const isFlush = (hand: string[]): boolean => {
    const suits = [];
    for (let s of hand) {
        suits.push(s[1]);
    }
    if (new Set(suits).size === 1) {
        return true;
    }
    return false;
}