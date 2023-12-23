// Object (key,value)
// const obj1 = new Object()
// const obj2 = {}


// const obj1 = new Object()
// obj1.age = 7
// obj1.date = 7
// obj1.time = 7
// console.log(obj1);


// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(obj2);
// })

// const obj2 = {
//     id: 12,
//     name: 'Ulfat',
//     surname: 'Zakirli',
//     mobileNumber: '0320434973',
//     position: 'MERN stack',
//     age: 23,
//     isAdmin: true,
//     info: {
//         street: 'Nizami',
//         city: 'Baku',
//     }
// }

// delete obj2.isAdmin
// obj2.name = 'Yusif'
// // console.log(obj2.info.street);
// // firstName,
// // lastName,
// // age,
// // {address:street,city},
// // position,
// // {info:uni,qualification,isAdmin}

// console.log(obj2);


// Array
// const arr1 = new Array(5)
// console.log('arr1', arr1.length);

// const arr2 = [5, true, false, 'ulfat', 'yusif']
// console.log('arr2', arr2.length);
// console.log(arr2.length);

// console.log(arr2[arr2.length - 1]); to show last value in array
// console.log(arr2.at(-1));
// arr2[55] = 'i am 5'

// console.log(arr2[55]);


// enter all data type to array (show me last second and second value)



// const numbers = [1, 2, 3, 4, 5]
// Array methods: push, pop, shift,unshift
// push - add value to the end of the array
// pop - remove last value

// unshify - add value in front of the array
// shift - remove first value


// push
// numbers.push(6, 7, true, undefined, 'Yusif')
// console.log(numbers);

// pop
// numbers.pop()
// console.log(numbers);

// unshift
// numbers.unshift('Nihadi', 'something', true, 'undefined')
// console.log(numbers);

// shift
// numbers.shift()
// numbers.shift()
// numbers.shift()
// console.log(numbers);


const students = [
    {
        id: 1,
        name: 'Yusif',
        surname: 'Yusiflit',
    },
    {
        id: 2,
        name: 'Reshad',
        surname: 'Yusifli'

    },
    {
        id: 3,
        name: 'Nihad',
        surname: 'Yusifli'

    },
    {
        id: 4,
        name: 'Xeyale',
        surname: 'Yusifli'

    },
    {
        id: 6,
        name: 'Yusif',
        surname: 'Yusifli',
    },
    {
        id: 5,
        name: 'Abbas',
        surname: 'Yusifli'
    }
]

// console.log(students[0].surname);

// map mehtod
// students.map((item, index) => console.log(item.id + index))
// sum id and age
// sum id and index


// console.log(students);

// filter method

// const result = students.filter(item => item.name === 'Yusif' || item.name === 'Nihad')
// console.log(result);

// 1, 2, 4, 22, 23, 24, 25, 2882, 26
// 22 = age <= 25 


// const data = [
//     {
//         id: 1,
//         age: 11
//     },
//     {
//         id: 2,
//         age: 29
//     },
//     {
//         id: 3,
//         age: 26
//     },
// ]

// let sum = 1
// // const result = data.map((item, index) => sum -= index)
// const result = data.map((item, index) => sum *= item.id)
// console.log(result);
// console.log(sum);

// sub(index)
// mult(id)

// let a = 1
// let b = 2
// // a = b + a
// b += a
// b = b + a
// b++
// console.log(b);

// const result1 = students.findLast(item => item.surname == 'Yusifli')
// const result = students.find(item => item.surname == 'Yusifli')
// console.log(result);



