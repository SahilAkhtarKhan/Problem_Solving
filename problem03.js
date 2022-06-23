// // Write a program that prints the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of the number
// , and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  // checking if the no. is divisible by 3 the print Fizz
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    // checking if the no. is divisible by 5 the print Buzz
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    // checking if the no. is divisible by 3 & 5 the print FizzBuzz
    console.log("FizzBuzz");
  } else {
    // Print rest of the no.
    console.log(i);
  }
}
