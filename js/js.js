function digitize(num) {
    return num.toString().split('').reverse().map(Number);
}

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
digitize(3457438)
sumMix(45738);