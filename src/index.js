import readlineSync from 'readline-sync';
import getPlayerName from './cli.js';

const QUESTION_INDEX = 0;
const ANSWER_INDEX = 1;

const runGame = (rule, gameQuestionAndAnswerFunc) => {
  const name = getPlayerName();
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const answerAndQuestion = gameQuestionAndAnswerFunc();
    console.log(`Question: ${answerAndQuestion[QUESTION_INDEX]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answerAndQuestion[ANSWER_INDEX];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default runGame;
