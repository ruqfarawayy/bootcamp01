let numbers = [4, 15, 20, 9, 11, 18];

let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  if (currentNumber % 2 == 0) {
    evenNumbers.push(currentNumber);
  }
}

console.log(evenNumbers);