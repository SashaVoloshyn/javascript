// // - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// function cutString(str, n) {
//     let result = [];
//     for (let i = 0; i < str.length; i += n) {
//         result.push(str.substr(i, n));
//
//     }
//     return result;
// }
//
// document.writeln(cutString('тутнаписанодофигачего',4))


// // - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
// // :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше
// // ніж на 2 символ далі після равлика, функція не чутлива до регістру
// // (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// // Протестувати на значеннях
//
// // someemail@gmail.com
// // someeMAIL@gmail.com
// // someeMAIL@i.ua
// // some.email@gmail.com
//
// function emailTest(email) {
//     if (email.includes('@') && email.indexOf('@') > 2) {
//         let emailUpperCase = email.toUpperCase();
//         if (emailUpperCase.lastIndexOf('.') - emailUpperCase.indexOf('@') > 2) {
//
//             return email + `  email is correct`;
//         }
//
//         return 'email not correct';
//     }
//
//     return 'email not correct';
// }
//
// console.log(emailTest(`someemail@gmail.com`));
// console.log(emailTest(`someeMAIL@gmail.com`));
// console.log(emailTest(`someeMAIL@i.ua`));
// console.log(emailTest(`Lasd@ssi.ua`));


// // - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// //     let symb = "о", str = "Астрономия это наука о небесных объектах";
// // document.writeln(count(str, symb)) // 5
//
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// function count(str, stringsearch) {
//     let sumbResult = 0;
//     let lowerStr = str.toLowerCase();
//     for (let i = 0; i < lowerStr.length; i++) {
//         const strElement = lowerStr[i];
//         if (strElement === stringsearch) {
//             sumbResult++;
//         }
//
//     }
//
//     return sumbResult;
//
// }
//
// console.log(count(str, symb));


// // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// //     let str = "Сила тяжести приложена к центру масс тела";
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// let str = "Сила тяжести приложена к центру масс тела"
//
// function cutString(str, n) {
//     let result = []
//     let splitStr = str.split(' ');
//     console.log(splitStr);
//     for (let i = 0; i < splitStr.length; i++) {
//         const element = splitStr[i];
//         if (i < n) {
//             result.push(element);
//         }
//
//     }
//
//     return result;
// }
//
// console.log(cutString(str, 5));

