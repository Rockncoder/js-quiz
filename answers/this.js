const companyName = 'Slack';
const  obj = {
  companyName: 'Uber',
  prop: {
    companyName: 'BitMob',
    getCompanyName: function () {
      return this.companyName;
    }
  }
};

const test = obj.prop.getCompanyName;

// console log #1
console.log(obj.prop.getCompanyName());
// console log #2
console.log(test());

/*
 The first console log, correctly prints the company name
 The second, does not.

 With a single line of code fix the call to test().
 Please don't change the object or break the getCompanyName method

 */

// Please fix me
console.log(test.call(obj.prop));