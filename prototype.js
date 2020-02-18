// Object.prototype


// Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

//  Calc Age

Person.prototype.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//  Get full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Get Married
Person.prototype.getMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John','Ritchie', '08-09-90');
const calum = new Person('Calum', 'Johnston', '10-07-91');

console.log(john.calcAge());

console.log(calum.getFullName());

john.getMarried('Barrel');

console.log(john.getFullName());



// Prototype Inheritance

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
}

// Greeting
Person.prototype.greeting = function(){
    return `Hi there, ${this.firstName} ${this.lastName}.`;
}

const person1 = new Person('Michael', 'Snow');

console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//  Create a customer
const customer1 = new Customer('Mark', 'Briskoe', '12-10-56', 'VIP');
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
    return `Hi there, ${this.firstName} ${this.lastName}! Welcome to our company.`;
}

console.log(customer1.greeting());