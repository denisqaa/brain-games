import runGame from "../index.js";
import {getRandomNumberFromRange} from "../random-utils.js";

const RULE = 'Find the greatest common divisor of given numbers.';

const getTwoNumbersAndGcd = () => {
    let randomNumbers = `${getRandomNumberFromRange()} ${getRandomNumberFromRange()}`;
    let splittedNumbers = randomNumbers.split(" ");
    const firstNumber = splittedNumbers[0];
    const secondNumber = splittedNumbers[1];
    let gcd;
    for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
        if( firstNumber % i === 0 && secondNumber % i === 0) {
            gcd = i;
        }
    }
    return [randomNumbers, String(gcd)];

};

export default () => {
    runGame(RULE, getTwoNumbersAndGcd)
};





