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


// const students = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']

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





