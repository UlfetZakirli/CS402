const users = [
    {
        id: 1,
        username: 'Raqif',
        info: {
            age: 22,
        }

    },
    {
        id: 2,
        username: 'Fuad',
        info: {
            age: 22,
        }
    },
    {
        id: 3,
        username: 'Reshad',
        info: {
            age: 29,
        }
    },
    {
        id: 4,
        username: 'Raqif',
        info: {
            age: 34,
        }
    },
    {
        id: 5,
        username: 'Aysu',
        info: {
            age: 28,
        }
    },
]


// let sum2 = 5
// users.map((user, index, array) => sum2 += user.info.age)
// console.log(sum2);



const numbers = [6, 6, 11, 21, 3, 34, 4, 3, 1, 9, 0, 7]
const numbers2 = [6, 6, 11, 21, 3, 34, 4, 3, 1, 9, 0, 7]
// sort
// const result = numbers.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })
// numbers.sort((a, b) => a - b)  //asc
// numbers2.sort((a, b) => b - a)  //desc
// console.log(numbers);
// console.log(numbers2);


// reduce mehtod
// let result = users.reduce((acc, curr, index) => acc * curr.info.age, '1')
// console.log(result);


//split,sort,reverse - modify original array
// other mehtods - don't modify original array



// students.sort((a, b) => a.localeCompare(b))
// reverse method


// const result = students.map(student => student + ' CS402')
// console.log(result);
// console.log(students);
// students.reverse()
// students.reverse()
// students.reverse()
// console.log(students);


// Class task
// 1.id,age,surname,name,(nested:address - street,city,country)
// 2.sum all index with reduce method
// 3.sort by age (asc)
// 4.sort by street (desc)
// 5.reverse
// 6.filter only name (where name length is equal 6 or higher)
// 7.find first object where age is greater than 25
// 8.create a new array which add 'myAge' word in front of age item

// const result = users.filter((item) => item.username.length >= 6)
// const result2 = users.find(item => item.info.age >= 25)

// users.reverse()
// console.log(users);




// console.log(test[1].info.city);


// 'myAge 22'
// const result2 = users.map((user) => ({ ...user, age: 'myAge ' + user.info.age, id: 'myId ' + user.id }))

// const result = users.map((user) => [{ ...user, age: 'myAge ' + user.info.age }]).flat()
// console.log('result', result);
// console.log('result2', result2);


// flat method
// flat() - for first level deep
// flat(Infinity) - for all level deep

// const arr = [[[[[[[6, 7, 8, 9]]]]]]].flat(Infinity)
// console.log(arr);


// slice methods

// console.log(students.filter(item => item === 'Yusif'));
// console.log(students.find(item => item === 'Yusif'));
// console.log(students[0]);
// console.log(students.at(0));

// console.log(students.slice(0, -6));
// console.log(students.slice(1, 4));


// console.log(user.toUpperCase());
// console.log(user.toLowerCase());

// console.log(students.map(item => item.toUpperCase()));

// const test = [
//     {
//         id: '1',
//         info: {
//             city: 'Baku'
//         }
//     },
//     {
//         id: '1',
//         info: {
//             city: 'Gence'
//         }
//     },
//     {
//         id: '1',
//         info: {
//             city: 'Gence'
//         }
//     }
// ]

// console.log(test.map((item) => item.info.city.toLowerCase()));


// let user = 'ulfaT'


// let result = user.slice(0, 1).toUpperCase() + user.slice(1).toLowerCase()
// console.log(result);




// slice,toUpperCase(),toLowerCase()

// return  'ulfaT'
// return 'LFAT'
// return 'ulFat'


// return Ulfat Zakirli
// return ulfat ZAKIRLI


// '' - single
// "" - double
// `` - back ticks

// let result = `${user.slice(0, 1).toUpperCase()}${user.slice(1, 5).toLowerCase()} ${user.slice(6, 7).toUpperCase()}${user.slice(7)}`
// console.log(result);




// console.log("user: " + person);
// console.log(`user: ${person}`);



// let person = 'Nihad Ibrahimxanli'
// const personArr = person.split(' ')

// split,join
// split("") - convert string to array
// join("") - convert arrat to string

// const studentsArr = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']
// const studentsText = studentsArr.join(' ')
// console.log('array- ', studentsArr);
// console.log('text- ', studentsText.split(' '));


// const result = user.split(' ').map(item => item.slice(0, 1).toUpperCase() + item.slice(1)).join(' ')
// console.log(result);



// class task 
// let user = 'ulfat zakirli'
// // split by 'l'
// // split by ','
// // split by '' and ' '


// const studentsArr = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']
// // add name in front of name like that (name: Yusif)
// // then join to text
// const result = studentsArr.map(item => `name: ${item}`).join(' ')
// console.log(result);












