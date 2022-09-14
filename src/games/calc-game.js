import playGame from "../game-base.js";
import {getRandomNumbersFromRange} from "../random-utils.js";

const RULE = 'What is the result of the expression?';
const AVAILABLE_OPERATORS = ['+', '-', '*']

const getRandomExpression = () => {
    return `${getRandomNumbersFromRange()} ${AVAILABLE_OPERATORS[getRandomNumbersFromRange(2)]} ${getRandomNumbersFromRange()}`;
};

const getCorrectAnswer = (expression) => {
    let splittedExpression = expression.trim().split(" ");
    let leftOperand = splittedExpression[0];
    let rightOperand = splittedExpression[2];
    let operation = splittedExpression[1];
    if (operation === '*') {
        return String(leftOperand * rightOperand);
    } else if (operation === '-') {
        return String(leftOperand - rightOperand);
    }
    return String(~~leftOperand + ~~rightOperand);
};

export default () => {
    playGame(RULE, getRandomExpression, getCorrectAnswer)
};





