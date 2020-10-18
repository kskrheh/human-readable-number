const { parse } = require("semver");

module.exports = function toReadable (number) {
  let result = '';
  const singleNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const doubleNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (parseInt(number / 100) > 0) {
    result = singleNumbers[parseInt(number / 100) - 1] + ' hundred ';
  }
  console.log(result);

  if (parseInt((number / 10) % 10) === 1) {
     result += doubleNumbers[parseInt(number % 10)];
  } else if ((parseInt((number / 10) % 10) === 0)) {
    if (number % 10 > 0) {
      result += singleNumbers[(number % 10) - 1];
    }
  } else {
    result += dozens[parseInt((number / 10) % 10) - 1];
    if (number % 10 > 0) {
      result += ' ' + singleNumbers[(number % 10) - 1];
    }
  }

 

  if (number === 0) {
    result = 'zero';
  }

  return result.trim();
}