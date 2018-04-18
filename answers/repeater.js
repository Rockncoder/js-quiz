/*
 Please create a new String method, repeater,
 which repeats a string the indicated number of times.
 Be sure to use good extension method etiquette.

 */

function createRepeater() {
  String.prototype.repeater = String.prototype.repeater || function(times) {
    let str = '';
    for (let i = 0; i < times; i++) {
      str += this;
    }
    return str;
  };
}

function useRepeater() {
  console.log('hello'.repeater(3))
}

createRepeater();
useRepeater();

