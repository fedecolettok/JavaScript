// concat()
var array1 = ['Cecilia', 'Fatima']
var array2 = ['Gottardini', 'Flores']
console.log(array1.concat(array2));

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin"];
console.log(arr2.concat(arr3, arr1));

var arr1 = [1, 2, [3, 4]];
var arr2 = [[5, 6], 7, 8];
console.log(arr1.concat(arr2));

// constructor
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.constructor);

// copyWithin()
// Copiar los 2 primeros elementos del arra
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0, 2));
