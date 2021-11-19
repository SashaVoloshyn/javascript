/*// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(num1,num2,num3) {
    if (num1 > num2 && num3 > num2) {
        document.write(num2)
    }
    else if (num2 > num1 && num3 > num1) {
        document.write(num1);
    } else {
        document.write(num3);
    }

}

minNum(33.22, 22, 33.11);*/
/*// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(num1, num2, num3) {
    if (num1 < num2 && num3 < num2) {
        document.write(num2);
    }
    else if (num1 > num2 && num1 > num3) {
        document.write(num1);
    } else {
        document.write(num3);
    }

}

maxNum(33.23, 33.1423424, 33.543);*/
/*// - створити функцію яка повертає найбільше число з масиву
let numarray = [33, 342, 324.234, -234, -11, 0, 2, 5, 6, 7, 8, 324, 45245, -23412143, 222, 4444, 5552, 12312, 0.3434];
function maxnumbofarr(numberArr) {
    let max = numberArr[0];
    for (const numberArrElement of numberArr) {
        if (numberArrElement > max) {
            max = numberArrElement;
        }
    }
    return max;
    
}

let x1 = maxnumbofarr(numarray);
document.write(x1);*/
/*// - створити функцію яка повертає найменьше число з масиву
let numarray = [33, 342, 324.234, -234, -11, 0, 2, 5, 6, 7, 8, 324, 45245, -23412143, 222, 4444, 5552, 12312, 0.3434];
function minnumbofarr(numberArr) {
    let min = numberArr[0];
    for (const minElement of numberArr) {
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;

}

let x1 = minnumbofarr(numarray);
document.write(x1);*/
/*// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numarray = [33, 342, 324.234, -234, -11, 0, 2, 5, 6, 7, 8, 324, 45245, -23412143, 222, 4444, 5552, 12312, 0.3434];

function sumarr(arr) {
    let result = 0;
    for (const arrElement of arr) {
        result = arrElement + result;
    }
    return result;
}

let x1 = sumarr(numarray);
document.write(x1);*/
/*// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numarray = [33, 342, 324.234, -234, -11, 0, 2, 5, 6, 7, 8, 324, 45245, -23412143, 222, 4444, 5552, 12312, 0.3434];
function sumarr(arr) {
    let result = 0;
    for (const arrElement of arr) {
        result = arrElement + result;
    }
    let ser = result / arr.length;
    return ser;
}

let x1 = sumarr(numarray);
document.write(x1);*/
/*function maxmin(numbs) {
    let max = numbs[0];
    let min = numbs[0];
    for (const numb of numbs) {
        if (numb > max) {
            max = numb;
        }
        if (numb < min) {
            min = numb;
        }

    }
    document.write(max);
    return min;

}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/
/*// - створити функцію яка заповнює масив рандомними числами

function random (arr) {
    let mass = [];
    for (let i = 0; i < arr; i++) {
        mass.push(Math.floor(Math.random()*777));
    }
    return mass;
}

let x1 = random(11);
document.write(x1);*/
/*// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function random (arr,limit) {
    let mass = [];
    for (let i = 0; i < arr; i++) {
        mass.push(Math.floor(Math.random()*limit));
    }
    return mass;
}

let x1 = random(44,11);
document.write(x1);*/
// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function random (arr,limit) {
// let mass = [];
// for (let i = 0; i < arr; i++) {
//     mass.push(Math.floor(Math.random()*limit));
// }
//     document.write(`${mass}</br>`);
//     const revers = mass.reverse();
//     return revers;
// }
// let x1 = random(7,100);
// document.write(x1)
