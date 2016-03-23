'use strict';

function thousands_separators(num) {
  var numarr = num.toString().split('');
  var resultarr = [];
  for(var i=numarr.length-1; i>=0; i--) {
    resultarr.unshift(numarr[i]);
    if(i%3===0) {
      resultarr.unshift(',');
    }
  }
  return resultarr.join('');
}

module.exports = thousands_separators;
