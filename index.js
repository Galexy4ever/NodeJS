// Seive solution

const [ num1 ] = process.argv.slice(2)
const [ num2 ] = process.argv.slice(3)

// function getPrimes(num1, num2) {
//     const seive = [];
//     const primes = [];
    
//     for (let i = num1; i <= num2; i++) {
//       if (!seive[i]) {
//         primes.push(i);
//         for (let j = i * i; j <= num2; j += i) {
//           seive[j] = true;
//         } 
//       }
//     }
    
    
//     return primes;
//   }
  
//   console.log(getPrimes(num1,num2));
  


  
  
//   // Check is Prime
  function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }    
    }
    return num > 1;
  }
  
  // Bruteforce
  function getPrimesFor(num1, num2) {
    const primes = [];
   
    
    for (let i = num1; i <= num2 ; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes;
  }
  
  console.log(getPrimesFor(num1, num2));