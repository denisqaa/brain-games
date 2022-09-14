import runGame from "../index.js";
import {getRandomNumberFromRange} from "../random-utils.js";
import {checkIsEven} from "../number-utils.js";

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumberAndItParity = () => {
    const randomNumber = getRandomNumberFromRange();
    return [randomNumber, checkIsEven(randomNumber)];
};

export default () => {
    runGame(RULE, getRandomNumberAndItParity)
};





