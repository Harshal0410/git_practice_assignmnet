function isPrime(num) {
  let counter = 0;
  if (num == 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      counter++;
    }
  } if (counter == 0) {
    return true;
  } return false;
  
}

let n = 13;
console.log(n,"-",isPrime(n));

