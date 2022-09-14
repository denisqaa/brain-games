import readlineSync from 'readline-sync';

const getPlayerName = () => {
  console.log('Welcome to the brain games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export default getPlayerName;
