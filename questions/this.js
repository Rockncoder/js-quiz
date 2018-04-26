/**********************************************************

 TITLE: this
 LEVEL: Beginner

 Change the last line of the code,
 without removing the call to print,
 so that it prints:

 company name = BitMob

 ***********************************************************/

const companyName = 'Slack';
const  obj = {
  companyName: 'Twitter',
  prop: {
    companyName: 'Instagram',
    show: function () {
      return 'company name = ' + this.companyName;
    }
  }
};

const print = obj.prop.show;

console.log(obj.prop.show());
console.log(print());