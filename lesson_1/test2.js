
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function(){
 return `${this.firstName} ${this.lastName}`;
};
Person.prototype.communicate = function(){
  console.log("Communicating")
};
Person.prototype.eat = function(){
  console.log("Eating")
};
Person.prototype.sleep = function(){
  console.log("Sleeping")
};

function Doctor(firstName, lastName, age, gender, specialization) {
  this.specialization = specialization;
  Person.call(this, firstName, lastName, age, gender);

}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log("Diagnosing");
}

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
console.log(doctor);