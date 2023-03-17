var exports = module.exports;
exports.add = (a, b) => {
  return a + b;
};
exports.sub = (a, b) => {
  return a - b;
};
exports.mul = (a, b) => {
  return a * b;
};
exports.div = (a, b) => {
  if (b == 0) {
    return "Khong the chia cho 0";
  }
  return a / b;
};
