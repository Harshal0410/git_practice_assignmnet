function isPrime(num) {
  if (num == 1) {
    return false
  }
  let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      count++;
    }
  } if (count == 0) {
    return true;
  } return false;
}

let n = 13;
console.log(isPrime(n));