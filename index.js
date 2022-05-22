// Seive solution
const colors = require('colors')
const [ num1 ] = process.argv.slice(2)
const [ num2 ] = process.argv.slice(3)
const Colors = {GREEN : 0, YELLOW: 1, RED : 2}
let currentColor = Colors.GREEN;


  function isPrime(num) {
    
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }    
    }
    return num > 1;
  }
  
 
  function colorDisplay() {
    currentColor++;
        if (currentColor > Colors.RED)
            currentColor = Colors.GREEN;
    }
  

function changeColor(primes) {

  for (let i = 0; i <= primes.length ; i++) {

    let number = primes[i]
     
      colorPrint(number)
  
      
      
    }
  }

  const colorPrint = (number) => {
       
    switch (currentColor){
        case Colors.RED:
            console.log(`${number}`.red);
            break;
        case Colors.GREEN:
            console.log(`${number}`.green);
            break;
        case Colors.YELLOW:
            console.log(`${number}`.yellow);
            break;
    }
    colorDisplay();
}

  function getPrimesFor(num1, num2) {

    
    const primes = [];
    
    
    for (let i = num1; i <= num2 ; i++) {
      
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return changeColor(primes);
  }
  
  console.log(getPrimesFor(num1, num2));