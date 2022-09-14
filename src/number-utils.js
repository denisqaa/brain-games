const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const checkNumberPrime = (number) => {
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number > 1 ? 'yes' : 'no';
};

export { checkIsEven, checkNumberPrime };
