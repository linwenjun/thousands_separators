'use strict';

function thousands_separators(num) {
  var numarr = num.toString().split('').reverse();
  var resultarr = [];
  for(var i=0; i<numarr.length; i++) {
    resultarr.unshift(numarr[i]);
    if(i%3===2 && numarr.length > i+1) {
      resultarr.unshift(',');
    }
  }
  return resultarr.join('');
}

module.exports = thousands_separators;
