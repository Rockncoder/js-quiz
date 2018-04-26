/**
 * Created by troymiles on 11/17/15.
 */
//class Person {
//  constructor(name){
//    this.name = name;
//  }
//
//  greet(){
//    return `Hello I am ${this.name}`;
//  }
//}
//
//let person = new Person('Tyler');
//console.log(person.greet());

class FlashMessage{
constructor(message){
  this.message = message;
}
  display() {
    alert(this.message);
  }

}

let flash = new FlashMessage("Hello from ES2015");
flash.display();