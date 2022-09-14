import playGame from "../game-base.js";
import {getRandomNumbersFromRange} from "../random-utils.js";

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => {
    return getRandomNumbersFromRange();
};

const getCorrectAnswer = (number) => {
    return number % 2 === 0 ? "yes" : "no";
};

export default () => {
    playGame(RULE, getRandomNumber, getCorrectAnswer)
};





