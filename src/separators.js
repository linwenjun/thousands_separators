'use strict';

function thousands_separators(num) {
  var decimal = num.toString().split('.')[1] || '';
  var integer = num.toString().split('.')[0];
  var numarr = integer.toString().split('').reverse();
  var resultarr = [];
  for(var i=0; i<numarr.length; i++) {
    resultarr.unshift(numarr[i]);
    if(i%3===2 && numarr.length > i+1) {
      resultarr.unshift(',');
    }
  }
  return resultarr.join('') + '.' + decimal;
}

module.exports = thousands_separators;
