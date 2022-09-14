import runGame from "../index.js";
import {getRandomNumberFromRange} from "../random-utils.js";

const RULE = 'What is the result of the expression?';
const AVAILABLE_OPERATORS = ['+', '-', '*']

const getExpressionAndAnswer = () => {
    let expression =` ${getRandomNumberFromRange()} ${AVAILABLE_OPERATORS[getRandomNumberFromRange(2)]} ${getRandomNumberFromRange()}`;
    let splittedExpression = expression.trim().split(" ");
    let leftOperand = splittedExpression[0];
    let rightOperand = splittedExpression[2];
    let operation = splittedExpression[1];
    if (operation === '*') {
        return [expression, String(leftOperand * rightOperand)];
    } else if (operation === '-') {
        return [expression, String(leftOperand - rightOperand)];
    }
    return [expression, String(~~leftOperand + ~~rightOperand)];
};

export default () => {
    runGame(RULE, getExpressionAndAnswer);
};





