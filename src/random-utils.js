const DEFAULT_MAX_NUMBER = 100;
const getRandomNumbersFromRange = (max = DEFAULT_MAX_NUMBER, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomNumbersFromRange};