/*// створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
function argum(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        document.write(a + b);
    }
    else if (b === undefined) {
        document.write(a);
    } else {
        document.write(`${a} ${b}`);
    }


}

argum('hello', 'okten');
argum(11, 14);
argum((4 > 2), false);
argum('ssssssssssssssssssss');
argum(22222222222);*/
/*
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


function sum(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);

    }
    return arr3;
}

let x1 = sum([1, 3, 4, 5, 6,4], [1, 3, 2, 1, 1,4]);
    document.write(x1);

*/


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keyObj(arr) {
    let a =[]
    for (let obj of arr) {
        a.push(Object.values(obj));

    }

    return a;


}

let x1 = keyObj(array);
document.write(x1);

