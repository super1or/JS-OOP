// ES5 OOP way

// Person Constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.caclAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const andrew = new Person('Andrew', '10-12-1988');
const sam = new Person('Sam', '10-12-1994');
console.log(andrew.caclAge());
console.log(sam.caclAge())




// Buid in Constructors

// String
const name1 = 'Ron';
const name2 = new String('Ron');
name2.surname = 'Wisley';
console.log(name2);

// Matching types
console.log(typeof name2);

if (name1 === 'Ron') {
    console.log('This is string');
} else {
    console.log('This is not a string');
}

if (name2 === 'Ron') {
    console.log('This is string');
} else {
    console.log('This is not a string');
}

// Numbers
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const addNums = (x, y) => x + y;
console.log(addNums(5, 5));
const addNums2 = new Function('x', 'y', 'return 1+1');
console.log(addNums2());





