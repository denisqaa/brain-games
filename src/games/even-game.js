import playGame from "../game-base.js";

const maxNumber = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => {
    return Math.floor(Math.random() * maxNumber);
};

const getCorrectAnswer = (number) => {
    return number % 2 === 0 ? "yes" : "no";
};

const isEvenGame = (answer, question) => {
    return answer === getCorrectAnswer(question);
};



export default () => {
    playGame(isEvenGame, rule, getRandomNumber, getCorrectAnswer)
};





