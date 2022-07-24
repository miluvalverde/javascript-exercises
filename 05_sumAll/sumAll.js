const sumAll = function(value1, value2) {
    let finalSum = 0;
    for (let i = 0; i < value2; i++) {
        finalSum = (Math.abs(value1 - value2) + 1)*(value1 + value2)/2 
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
