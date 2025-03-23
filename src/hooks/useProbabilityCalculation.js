export const useProbabilityCalculation = (num) => {
    let integerNum = Math.floor(num);
    const fractionalPart = num - integerNum;

    if (fractionalPart > 0 && Math.random() < fractionalPart) integerNum++;

    return integerNum;
};
