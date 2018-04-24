/*

Write a program to print out the numbers 1 to 100 without using any loop.

 */

function noLoop(x){
  console.log(`the count = ${x}`);
  if(x === 100 ) return;
  noLoop(x + 1);
}

noLoop(1);