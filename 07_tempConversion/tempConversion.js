const ftoc = function(temp) {
  return (temp - 32)/1.8
};

const ctof = function(temp) {
  return temp * 1.8 + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
