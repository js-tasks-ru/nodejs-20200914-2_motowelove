function sum(a, b) {
  /* ваш код */
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    throw new TypeError('Not numbers', "sum() in sum.js", 10)
  }
}

module.exports = sum;
