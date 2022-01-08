module.exports = function reverse (n) {
       let res = 0, k = 1;
       n = Math.abs(n);
       while(n >= 1){
           res += n % 10;
           n = (n - (n % 10)) / 10;
           res *= 10;
           k++;
       }
       return res / 10;
}
