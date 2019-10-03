module.exports = function multiply(first, second) {
      let firstNumber = BigInt(first);
      let secondNumber = BigInt(second);
    let totalNum = firstNumber*secondNumber;
    return totalNum.toLocaleString()
};
