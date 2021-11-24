// Всі функції повинні бути описані стрілочним типом!!!!

// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numbMin = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//     }
//     else if (num2 < num3 && num2 < num1) {
//         document.write(num2);
//     }
//     else if (num3 < num1 && num3 < num2) {
//         document.write(num3);
//     } else {
//         document.write('-_- wtf?');
//     }
// };
// numbMin(33, 22, 'oreewq');

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numbMax = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//     }
//     else if (num2 > num1 && num2 > num3) {
//         document.write(num2);
//     }
//     else if (num3 > num1 && num3 > num2) {
//         document.write(num3);
//     } else {
//         document.write('-_- wtf?');
//     }
// };

// // - створити функцію яка повертає найбільше число з масиву
// let arr = [222, 111, 444, 5, 33, 0.24, 345, 0.25, -0.26, 34224];
// let maxElement = (arr) => {
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max;
// };
// document.write(maxElement(arr));

// // - створити функцію яка повертає найменьше число з масиву
// let arr = [222, 111, 444, 5, 33, 0.24, 345, 0.25, -0.26, 34224];
// let minElement = (arr) => {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// };
// document.write(minElement(arr));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [222, 111, 444, 5, 33, 0.24, 345, 0.25, -0.26, 34224];
// let arraySum = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result = arrayElement + result;
//     }
//     return result;
// };
// document.write(arraySum(array));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [222, 111, 444, 5, 33, 0.24, 345, 0.25, -0.26, 34224];
// let serAref = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result = arrayElement + result;
//     }
//     return result / array.length;
// };
// document.write(serAref(array));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let maxmin = (numbs) => {
//     let max = numbs[0];
//     let min = numbs[0];
//     for (const numb of numbs) {
//         if (numb > max) {
//             max = numb;
//         }
//         if (numb < min) {
//             min = numb;
//         }
//     }
//     document.write(max);
//     return min;
// };

// /*- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.*/
// let random = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 100));
//
//     }
//     return array;
// };
// document.write(random(33));

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * limit));
//     }
//     return array;
// };
// document.write(random(22, 33));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let mass = (length, limit) => {
//     let newArray = [];
//     for (let i = 0; i <length; i++) {
//         newArray.push(Math.floor(Math.random() * limit));
//     }
//     document.write(`${newArray}</br>`);
//     const reverse = newArray.reverse();
//     return reverse;
//
// };
// document.write(mass(7, 33));


