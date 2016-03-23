'use strict';

function thousands_separators(num) {
  var numarr = num.toString().split('').reverse();
  var resultarr = [];
  for(var i=0; i<=numarr; i++) {
    resultarr.push(numarr[i]);
    if(i%3===0) {
      resultarr.unshift(',');
    }
  }
  return resultarr.join('');
}

module.exports = thousands_separators;
