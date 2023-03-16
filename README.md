# Argenti - Typescript Poker Challenge

This is the scaffold project for Argenti's poker challenge.
Use this template to get you up and running for the Argenti challenge, then make changes to the `src/` directory
to have a functioning solution based on our given instructions.

## Project structure

All the relevant code sits in `src/`. An `index.ts` is already present, but there is no limit to writing all your code inside or outside of it. All Jest tests should sit in the `__tests__` folder, and the naming convention requires that the filename includes `.spec` or `.test`, otherwise it will not be picked up.

This project also has prettier and eslint set up, making sure that those are both passing will be beneficial to your challenge's review. At the end of this file, you will find links to VSCode extensions that help automatically run Prettier and ESLint whilst you write code.

## Input file

The input file you are required to read is available in `bin/poker-hands.txt`. Make sure your program can read the file from that location.

## Running the code

To run the code whilst developing, use the following command:

```bash
yarn start
```

## Testing the code

To run the [Jest](https://jestjs.io/) unit test, use the following command:

```bash
yarn test
```

### Example Run
```
PS C:\Users\Tim\poker-challenge-ts> npm run start

> poker-challenge@1.0.0 start
> ts-node src/index.ts       


Player1: 263

Player2: 237

PS C:\Users\Tim\poker-challenge-ts> 
```


```
PS C:\Users\Tim\poker-challenge-ts> npm run test

> poker-challenge@1.0.0 test
> jest

 PASS  src/__tests__/index.spec.ts
  isOnePair Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (3 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
  isTwoPair Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
  isThreeOfKind Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '6D', '6C', '6H'] to be true
  isFullHouse Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '3D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '6D', '6C', '6H'] to be true
    √ ['5S', '5D', '6D', '6C', '6H'] to be true
  isFlush Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '3D', '6C', '6H'] to be true
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '6D', '6C', '6H'] to be true (1 ms)
    √ ['2D', '9C', 'AS', 'AH', 'AC'] to be true (1 ms)
    √ ['2D', '9D', 'AD', '7D', 'QD'] to be true (1 ms)
  isFourOfKind Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '6D', '6C', '6H'] to be true
    √ ['2D', '9C', 'AS', 'AH', 'AC'] to be true
    √ ['2D', '9D', 'AD', '7D', 'QD'] to be true
    √ ['2D', '2S', '2C', '2H', 'QD'] to be true (1 ms)
  isRoyalFlush Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (3 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '6D', '6C', '6H'] to be true (1 ms)
    √ ['2D', '9C', 'AS', 'AH', 'AC'] to be true (1 ms)
    √ ['2D', '9D', 'AD', '7D', 'QD'] to be true
    √ ['2D', '2S', '2C', '2H', 'QD'] to be true
    √ ['2D', '3S', '4C', '5H', '6D'] to be true
    √ ['2D', '3D', '4D', '5D', '6D'] to be true (1 ms)
    √ ['TD', 'JD', 'QD', 'KD', 'AD'] to be true (1 ms)
  isStraight Test Suite
    √ ['5S', '9S', '9D', '6C', '6H'] to be true (1 ms)
    √ ['5S', '9S', '3D', '6C', '6H'] to be true
    √ ['5S', '9S', '9D', '6C', '6H'] to be true
    √ ['5S', '9S', '6D', '6C', '6H'] to be true (1 ms)
    √ ['2D', '9C', 'AS', 'AH', 'AC'] to be true
    √ ['2D', '9D', 'AD', '7D', 'QD'] to be true
    √ ['2D', '2S', '2C', '2H', 'QD'] to be true
    √ ['2D', '3D', '4D', '5D', '6D'] to be true

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 | 
 cardsOrder.ts    |     100 |      100 |     100 |     100 | 
 isFlush.ts       |     100 |      100 |     100 |     100 | 
 isFourOfKind.ts  |     100 |      100 |     100 |     100 | 
 isFullHouse.ts   |     100 |      100 |     100 |     100 | 
 isOnePair.ts     |     100 |      100 |     100 |     100 | 
 isRoyalFlush.ts  |     100 |      100 |     100 |     100 | 
 isStraight.ts    |     100 |      100 |     100 |     100 | 
 isThreeOfKind.ts |     100 |      100 |     100 |     100 | 
 isTwoPair.ts     |     100 |      100 |     100 |     100 | 
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       46 passed, 46 total
Snapshots:   0 total
Time:        3.303 s, estimated 4 s
Ran all test suites.
PS C:\Users\Tim\poker-challenge-ts> 
```



## Extensions

### ESLint

Name: ESLint  
Id: dbaeumer.vscode-eslint  
Description: Integrates ESLint JavaScript into VS Code.  
Version: 2.2.2  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### Prettier

Name: Prettier - Code formatter  
Id: esbenp.prettier-vscode  
Description: Code formatter using prettier  
Version: 9.5.0  
Publisher: Prettier  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
