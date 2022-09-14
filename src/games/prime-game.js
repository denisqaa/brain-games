import runGame from '../index.js';
import getRandomNumberFromRange from '../random-utils.js';
import { checkNumberPrime } from '../number-utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumberAndItPrime = () => {
  const randomNumber = getRandomNumberFromRange();
  return [randomNumber, checkNumberPrime(randomNumber)];
};

export default () => {
  runGame(RULE, getRandomNumberAndItPrime);
};
