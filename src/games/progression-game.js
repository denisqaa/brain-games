import runGame from '../index.js';
import getRandomNumberFromRange from '../random-utils.js';

const PROGRESSION_LENGTH = 10;
const RULE = 'What number is missing in the progression?';
const MISSING_ELEMENT_PLACEHOLDER = '..';

const getProgressionAndAnswer = () => {
  const progression = [];
  const start = getRandomNumberFromRange();
  progression.push(start);
  const progressionDiff = getRandomNumberFromRange(20);
  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(progression[i - 1] + progressionDiff);
  }
  const missingElementIndex = getRandomNumberFromRange(progression.length - 1);
  const correctAnswer = progression[missingElementIndex];

  progression[missingElementIndex] = MISSING_ELEMENT_PLACEHOLDER;
  return [progression.toString().replaceAll(',', ' '), String(correctAnswer)];
};

export default () => {
  runGame(RULE, getProgressionAndAnswer);
};
