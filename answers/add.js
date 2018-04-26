/*

Create a function addN which satisfies the code below

 */

// a simple function factory
function oldStyleAddN(n) {
  // a function is returned
  return function (x) {
    return n + x;
  }
}

// a simple function factory
const addN = n => x => n + x;

// let's create two functions, add10 and add50
const add10 = addN(10);
const add50 = addN(50);
const add100 = oldStyleAddN(100);

// they don't interfere with each other or share variables or state
console.info('add10(1) = ', add10(1));
console.info('add50(1) = ', add50(1));
console.info('add10(5) = ', add10(5));
// add10(1) =  11
// add50(1) =  51
// add10(5) =  15
