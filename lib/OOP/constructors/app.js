// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob); // returns 1981-09-09T22:00:00.000Z
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime(); // in miliseconds
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const john = new Person('John', '9-10-1981');
console.log(john.calculateAge());
