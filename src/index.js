module.exports = function getZerosCount(number, base) {
  var result = Number.MAX_VALUE;
  
  for(var i = 2; i <= base; i++) {
    var p = 0;
    while (base % i == 0) {
      p++;
      base /= i;
    }
    var ndevi = Math.floor(number / i);
    var n = 0;
    while (ndevi > 0) {
      n += ndevi;
      ndevi = Math.floor(ndevi / i);
    }
    result = Math.min(result, Math.floor(n / p));
  }
  return result;
}