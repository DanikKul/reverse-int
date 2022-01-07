function reverse(i){
    let res = 0, k = 1;
    while(i >= 1){
        res += i % 10;
        i = (i - (i % 10)) / 10;
        res *= 10;
        k++;
    }
    return res / 10;
}
