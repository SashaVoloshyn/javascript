// Всі функції повинні бути описані стрілочним типом!!!!
// //     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a, b) => a * b;
// document.write(s(10, 33));

// // - створити функцію яка обчислює та повертає площу кола
// let skola = (r) => {
//     return 3.14 * (Math.pow(r, 2));
// };
// document.write(skola(4));

// // - створити функцію яка обчислює та повертає площу циліндру
// let scil = (r, h) => {
//     return 2 * 3.14 * r * h;
// };
// document.write(scil(11, 22));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// array = [22, 3442, 'wqeqwe', '11111111', 0.222];
// let mas = (array) => {
//     for (const item of array) {
//         document.write(item);
//     }
// };
// mas(array);

// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let txt = (p) => {
//     document.write(`<p> ${p} </p>`);
// };
// txt('okten h1');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (txt) => {
//     document.write(`<ul>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`</ul>`);
// };
// list('okteeen');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (elements, txt) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < elements; i++) {
//         document.write(`<li>${txt}</li>`);
//     }
//     document.write(`</ul>`);
// };
// list(11, 'okten');

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['owu', true, 'oktem', 123132, 0.222];
// let mass = (massElements) =>{
//     document.write(`<ul>`)
//     for (const elements of massElements) {
//         document.write(`<li>${elements}</li>`);
//     }
//     document.write(`</ul>`);
// };
// mass(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.?
//     let array= [{id:1,name:'Sasha',age:15}, {id:2,name: 'Nastya',age: 18},{id:3,name: 'Kolya',age: 22},{id: 4,name: 'Vika',age: 14}];
// let arrDocument = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);
//
//     }
// };
// arrDocument(array);

