const DEFAULT_MAX_NUMBER = 100;
const DEFAULT_MIN_NUMBER = 0;
const getRandomNumberFromRange = (max = DEFAULT_MAX_NUMBER, min = DEFAULT_MIN_NUMBER) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomNumberFromRange};