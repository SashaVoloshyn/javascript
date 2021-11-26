// // - Дано список імен.
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
//
// let normal = (name) => {
//   return name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
// };
// console.log(normal(n1));
// console.log(normal(n2));
// console.log(normal(n3));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr);
// };
// random(44);



// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // Відсортувати його за допомоги sort
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// };
// let array = random(22);
// console.log(array.sort((a,b)=> a-b));
//
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(array.filter(value => value % 2 === 0));
//
//
// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// // за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(array.map(value => value.toString()));
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
// // до меньшого, або навпаки в залежності від значення аргументу direction.
// //  let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         return arr.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         return arr.sort((a, b) => b - a);
//     } else {
//         return console.log('-_-');
//     }
//
// };
//
// console.log(sortNums(array, 'descending'));

// // - є масив
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
