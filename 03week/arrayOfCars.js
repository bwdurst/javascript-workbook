// Task 1
carArray = ['Ford', 'Kia', 'Chevy', 'Toyota'];
console.log(carArray.length);

// Task2
carArray2 = ['Audi', 'Mercedes', 'BMW', 'Honda']
let totalCars = carArray.concat(carArray2);
console.log(totalCars);

// Task 3
console.log(totalCars.indexOf('Honda'));

// Task 3.1
console.log(totalCars.lastIndexOf('Ford'));

// Task 4
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// Task 5
let totalCars2 = stringOfCars.split(",");
console.log(totalCars2);

// Task 6
let carsInReverse = totalCars2.reverse();
console.log(carsInReverse);

// Task 7
carsInReverse = carsInReverse.sort();
// Alert does not function in VSCode.
// alert(carsInReverse.indexOf('Audi'));
console.log(carsInReverse);

// Task 8
let removedCars = carsInReverse.slice(3, 5);
console.log(removedCars);

// Task 9
removedCars = carsInReverse.splice(3, 2);
console.log(carsInReverse);
console.log(removedCars);

// Task 10
carsInReverse.push('Ford', 'Honda');
carsInReverse.sort();
console.log(carsInReverse);

// Task 11
carsInReverse.pop();
console.log(carsInReverse);

// Task 12
carsInReverse.shift();
console.log(carsInReverse);

// Task 13
carsInReverse.unshift('Jeep');
console.log(carsInReverse);

// Task 14
const array = [23, 45, 0, 2]
array.forEach(function (element) {
  numbers = (element+2);
  console.log(numbers);
});
