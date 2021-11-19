// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*function spryam(a,b) {
    let result = a * b;
    return result;
}

let x1 = spryam(20, 40);
let x2 = spryam(44, 832);
console.log(x1,x2);*/

/*function skola(r) {
    const p = 3.14;
    let result = p * Math.pow(r, 2);
    return result;
}


let x1 = skola(4);
let x2 = skola(11);
console.log(x1,x2);*/

/*function scil(r,h) {
    const p = 3.14;
    let result = 2 * p * r * h;
    return result;

}

let x1 = scil(4, 5);
let x2 = scil(11, 8);
console.log(x1, x2);*/

/*
function mass(arr) {
    for (const item of arr) {
        console.log(item);
    }

}
*/

/*function paragraph(txt) {
    document.write(`<p> ${txt} </p>`)

}
paragraph(`hello okten`);*/

/*
function list(txt) {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);

}

list(`okten`);*/

/*function list(elements,txt) {
    document.write(`<ul>`);
    for (let i = 0; i < elements; i++) {
        document.write(`<li>${txt}</li>`);
    }

    document.write(`</ul>`);

}

list(33,`okten`);*/

/*
function masselement(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);

}

masselement([`sadeqweasd`, 234243, false]);*/

/*
let array = [{id:1,name:'Sasha',age:15}, {id:2,name: 'Nastya',age: 18},{id:3,name: 'Kolya',age: 22},{id: 4,name: 'Vika',age: 14}];
function objkt(arr) {
    for (let arrayEl of arr) {
        document.write(`<div> ${arrayEl.id} - ${arrayEl.name} - ${arrayEl.age}</div>`);

    }

}
objkt(array);
*/



