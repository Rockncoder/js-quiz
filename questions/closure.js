
/*
 Please fix the following code snippet.
 The output should be:

The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3

*/
const arr = [10, 12, 15, 21];
for (var i=0; i < arr.length; i++) {
  setTimeout(() => console.log('The index of this number is: ' + i), 3000);
}

