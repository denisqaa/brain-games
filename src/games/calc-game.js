import runGame from '../index.js';
import getRandomNumberFromRange from '../random-utils.js';

const RULE = 'What is the result of the expression?';
const AVAILABLE_OPERATORS = ['+', '-', '*'];

const getExpressionAndAnswer = () => {
  const expression = `${getRandomNumberFromRange()} ${AVAILABLE_OPERATORS[getRandomNumberFromRange(AVAILABLE_OPERATORS.length)]} ${getRandomNumberFromRange()}`;
  const splittedExpression = expression.trim().split(' ');
  const leftOperand = splittedExpression[0];
  const rightOperand = splittedExpression[2];
  const operation = splittedExpression[1];
  if (operation === '*') {
    return [expression, String(leftOperand * rightOperand)];
  } if (operation === '-') {
    return [expression, String(leftOperand - rightOperand)];
  }
  return [expression, String(parseInt(leftOperand, 10) + parseInt(rightOperand, 10))];
};

export default () => {
  runGame(RULE, getExpressionAndAnswer);
};
