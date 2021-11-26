// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = 'hello world';
// console.log(hello.length);
// let lorem = 'lorem ipsum';
// console.log(lorem.length);
// let js = 'javascript is cool';
// console.log(js.length);


// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = 'hello world';
// let helloUp = hello.toUpperCase();
// console.log(helloUp);
//
// let lorem = 'lorem ipsum';
// let loremUp = lorem.toUpperCase();
// console.log(loremUp);
//
// let js = 'javascript is cool';
// let jsUp = js.toUpperCase();
// console.log(jsUp);

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let hello = 'HELLO WORLD';
// let helloDown = hello.toLowerCase();
// console.log(helloDown);
//
// let lorem = 'LOREM IPSUM';
// let loremDown = lorem.toLowerCase();
// console.log(loremDown);
//
// let js = 'JAVASCRIPT IS COOL';
// let jsDown = js.toLowerCase();
// console.log(jsDown);


// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// let clearStr = str.trim();
// console.log(clearStr);


// // // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // //     let str = 'Каждый охотник желает знать';
// // // let arr = stringToarray(str);
// // // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// //
// //
// let str = 'Каждый охотник желает знать';
// let stringArr = (str) => {
//     let split = str.split(' ');
//     return split;
// };
// console.log(stringArr(str));


// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
//
//
// let delete_characters = (str, length) => {
//     return str.substr(0, length);
// };

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //     let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// };
// console.log(insert_dash(str));


// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'okten dspdodsopd sfdspofdspo';
// let Upslice = (str) => {
//     return str[0].toUpperCase() + str[1].slice(1);
// };
// console.log(Upslice(str));

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
//
//
//
// let capitalize = (str) => {
//     return str.split(' ').map(value=>value.charAt(0).toUpperCase()+value.slice(1)).join(' ');
//
// };
// console.log(capitalize('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at consequuntur dignissimos doloremque eligendi laborum voluptatem. Alias, at distinctio esse iste non nulla perferendis recusandae sed tempora voluptates. recusandae, tempora'));