import readlineSync from "readline-sync";
import getPlayerName from "./cli.js";

const playGame = (game, rule, gameQuestion, getCorrectAnswer) => {
    const name = getPlayerName();
    console.log(rule);
    for (let i = 0; i < 3; i++) {
        let question = gameQuestion();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (game(answer, question)) {
            console.log("Correct!");
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${getCorrectAnswer(answer)}`);
            console.log(`Let's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}`);
}

export default playGame;