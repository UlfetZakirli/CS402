// let age = 20


// if (age > 22) {
//     console.log('1');
// } else {
//     console.log('2');
// }

// Ternary operator

// age > 22 ?
//     console.log('1')
//     : age == 20
//         ? console.log('2')
//         : console.log('3');


// age > 22
//     ? console.log('1')
//     : console.log('2')



// let user = 'Yusif'

// if (user.length === 5) {
//     console.log('it is Yusif');
// }
// if (typeof user === 'string') {
//     console.log('it is Yusif');
// }
// if (user === 'Yusif') {
//     console.log('it is Yusif');
// }
// if (user.startsWith('Yus')) {
//     console.log('it is Yusif');
// }
// if (user.endsWith('f')) {
//     console.log('last Yusif');
// }


// functions

// function sum() {
//     let a = 9
//     let b = 10
//     let c = 12
//     console.log(a + b + c);
// }


// sum()


// function sum() {
//     return 8 + 4
// }
// console.log(sum());



// let sum2 = 0
// user.map((user) => sum += user)
// user2.map((user) => sum2 += user)

// console.log(Math.round(sum / user.length));
// console.log(Math.round(sum2 / user2.length));

// Math.floor(22.4) == 22 (to upper)
// Math.ceil(22.4) == 23 (to lower)
// Math.round(22.4) == 22 (round)

// const users = [28, 18, 28, 18, 18, 24, 21, 18, 23]
// const users2 = [28, 18, 28, 18, 18, 21, 31, 48, 29]
// const users3 = [28, 18, 28, 18, 18, 21, 31, 88, 29]
// const users4 = [28, 28, 58, 58, 18, 21, 31, 48, 29]


// function getAvg(anyArray) {
//     let sum = 0
//     anyArray.map((user) => sum += user)
//     return Math.round(sum / anyArray.length)
// }

// console.log(getAvg(users));
// console.log(getAvg(users2));
// console.log(getAvg(users3));
// console.log(getAvg(users4));



// const arrNum = [6, 2, 6, 7, 2, 1, 88]

// console.log(studentsArr.filter(item => item.startsWith('N')));

// class Task

// 1.Create a variable (let num=17) give a condition with ternary operator
// 2.Check 'your name' if it start with 'a' console '1' else console '2'
// 3.Check 'your name' if it end with 't' console '1' else console '2'

// 4.Create a function called 'sumNum' which sum 8 and 9
// 5.Create a function called 'multNum' which mult 19, 59 and 9
// 6.Create a function called 'getAvg' which avg of 'arrNum'
// 7.Create a function called getUsers which gives users from 'studentsArr' where user start with 'N'
// 8.Create a function called getUsers2 which gives users from 'studentsArr' where user length is eqaul or greater than 6


// function getAvg() {
//     return arrNum.reduce((acc, curr) => acc + curr, 0) / arrNum.length
// }
// console.log(getAvg());

////////////////////////////////////////////////////////////////////////////////////////////
//get random user from studentsArr
// let studentsArr = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']

// function getRandom() {
//     let randomName = studentsArr[Math.floor(Math.random() * studentsArr.length)]
//     console.log(randomName);
//     studentsArr = studentsArr.filter((student) => student !== randomName)
//     return studentsArr
// }

// setInterval(() => {
//     if (studentsArr.length) {
//         console.log(getRandom());
//     } else {
//         console.log('finished');
//     }
// }, 2000)
////////////////////////////////////////////////////////////////////////////////////////////

// studentsArr.map((student,index) => console.log(student))

// for (let i = 0; i <= 5; i += 2) {
//     console.log(i);
// }



// for (let i = 0; i < studentsArr.length; i++) {
//     console.log(studentsArr[i]);
// }


// for (let i = 0; i < 20; i += 3) {
//     console.log(i);
// }

// let myName = 'Nezire'
// U
// l
// f
// a
// t

// for (let i = 0; i < 20; i ++) {
//    console only odd numbers
// }

// for (let i = 0; i < 20; i ++) {
//    console only even numbers
// }


// Math methods
console.log(Math.max(1, 2, 66, 44, 200));
console.log(Math.min(1, 2, 66, 44, 200));
console.log(Math.pow(5, 2));
console.log(Math.sqrt(36));
console.log(Math.abs(-999));


