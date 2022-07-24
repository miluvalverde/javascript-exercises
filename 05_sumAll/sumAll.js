const sumAll = function(value1, value2) {
    if (!Number.isInteger(value1) || !Number.isInteger(value2)) return "ERROR"; 
    if (value1 < 0 || value2 < 0) return "ERROR";
    else return finalSum = (Math.abs(value1 - value2) + 1)*(value1 + value2)/2;
}

// Do not edit below this line
module.exports = sumAll;
