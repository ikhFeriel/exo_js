const array = [6, 17, 2, 8, 15, 9, 3];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log("(4)-The bonus" + " [" + array + "]");
console.log("-The largest number in the array is: " + largest);
