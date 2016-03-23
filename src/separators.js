'use strict';

function thousands_separators(num) {
  var numarr = num.toString().split('');
  var resultarr = [];
  for(var i=numarr.length-1; i>=0; i--) {
    resultarr.push(numarr[i]);
    if(i%3===0) {
      resultarr.push(',');
    }
  }
  return resultarr.join('');
}

module.exports = thousands_separators;
