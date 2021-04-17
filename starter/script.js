"use strict"

// function smooth(apple, watermellon) {
//     const juice = `We mixed ${apple} apples and ${watermellon} watermellon`;
//     return juice;
// }

// console.log(smooth());


// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);


// // Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);


// Arrow functions

// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1991));

// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

// const koalaScore1 = 65;
// const koalaScore2 = 54;
// const koalaScore3 = 49;

// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;

// const koalaScore1 = 23;
// const koalaScore2 = 34;
// const koalaScore3 = 27;


// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAvg = calcAvg(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// const koalaAvg = calcAvg(koalaScore1, koalaScore2, koalaScore3);


// const checkWinner = function (dAvg, kAvg) {
//     if (dAvg >= 2 * kAvg) {
//         console.log('This is a test');
//     } else if (kAvg >= dAvg * 2) {
//         console.log('Opps')
//     }
// }

// console.log(checkWinner(dolphinsAvg, koalaAvg));

// const cars = ['Benz', 'Range', 'toyota'];

// // Push is a method that adds an element to the end of an array

// const newCars = cars.push('Honda');
// // push returns a value, it returns the length of the new array. you can store it

// // Unshift adds elemets to the begining of an array
// cars.unshift('Nissan');

// // Pop removes the last element of the array, it return the removed element

// const poppedElement = cars.pop();

// // Shift removes the first element in an array

// cars.shift();

// // index of an element

// cars.indexOf('Range');

// // include will tell if the element is contained in the array, it tests with strict equality it does'nt do type coercion
// cars.includes('Massirati')


// console.log(cars);



// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else
//         return bill * 0.21;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [calcTip(125) + bills[0], calcTip(555) + bills[1], calcTip(44) + bills[2]];

// console.log(total);

// const array = [
//     {
//         firstName: 'Ebi',
//         lastName: 'Alale',
//         birthYear: 1988,
//         job: 'Software Developer',
//         friends: 'Jesus',
//         siblings: ['Michael', 'Leslie', 'Sophia'],
//         cars: ['Benz', 'Toyota'],
//     },

const array = {

    firstName: 'Michael',
    lastName: 'Alale',
    birthYear: 19,
    job: 'Finance Developer',
    friends: 'Jesus',
    siblings: ['Leslie', 'Sophia', 'Ebi'],
    cars: ['Benz', 'Honda'],
    calcAge: function () {
        this.age = 20 + birthYear;
        console.log(this.age)
        return this.age;
    }
};

console.log(array.age)

// ebi.language = 'English';
// ebi['religion'] = 'Christianity';


// console.log(` ebi has ${ebi.siblings.length} siblings and his favourite is ${ebi.siblings[2]}`);

// console.log(`${array[1].firstName} is a ${array[1].age} year old man`);

