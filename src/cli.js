import readlineSync from 'readline-sync';

const getPlayerName = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export default getPlayerName;
