/**********************************************************

 TITLE: person
 LEVEL: Beginner

 Recreate the Person class by using a function named PersonX

 ***********************************************************/

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

const person = new Person('Tyler');
console.log(person.greet());

// Please create the PersonX function, then uncomment the code below



// const personX = new PersonX('Tina');
// console.log(personX.greet());