for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {                   // Se i è divisibile per 3
        console.log("Fizz");            // Stampa Fizz
    } else if (i % 5 == 0) {            // Se i è divisibile per 5
        console.log("Buzz");            // Stampa Buzz
    } else if (i % 15 == 0) {           // Se i è divisibile per 15
        console.log("FizzBuzz");        // Stampa FizzBuzz
    } else {                            // In tutti gli altri casi
        console.log(i)                  // Stampa il valore di I
    }
}