// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:


let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
/*//     1. перебрати його циклом while
i = 0;
while (i < numbers.length) {
    document.write(`<div>${numbers[i]}</div>`);
    i++;
}*/

/*
// 2. перебрати його циклом for
for (i = 0; i < numbers.length; i++) {
    document.write(`<div>${numbers[i]}</div>`);
}*/

/*
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i<numbers.length) {
    if (i % 2 !== 0) {
        document.write(`<div>${numbers[i]}</div>`);

    }
    i++;
}*/
/*// перебрати циклом for та вивести  числа тільки з непарним індексом?
for (i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {

        document.write(`<div>${numbers[i]}</div>`);
    }
}*/
/*// перебрати циклом while та вивести  числа тільки парні  значення?
i = 0;
while (i<numbers.length) {
    if (numbers[i] % 2 === 0) {
        document.write(`<div>${numbers[i]}</div>`);

    }
    i++;
}*/
/*// перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {

        document.write(`<div>${numbers[i]}</div>`);
    }
}*/

/*// 7. замінити кожне число кратне 3 на слово "okten"
debugger;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
        document.write(`<div>${numbers[i]}</div>`);
}*/

/*
// 8. вивести масив в зворотньому порядку.

for (i = numbers.length-1; i >= 0; i--) {
    document.write(`<div>${numbers[i]}</div>`);

}*/

/*// замінити кожне число кратне 3 на слово "okten"BACK

for (i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
    document.write(`<div>${numbers[i]}</div>`);
}*/

/*
// перебрати циклом for та вивести  числа тільки парні  значення BACK
for (i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
        document.write(`<div>${numbers[i]}</div>`);
    }
}*/

// // перебрати циклом while та вивести  числа тільки парні  значення?back
// i = numbers.length;
// while (i>=0) {
//     if (numbers[i] % 2 === 0) {
//         document.write(`<div>${numbers[i]}</div>`);
//
//     }
//     i--;
// }


/*// перебрати циклом for та вивести  числа тільки з непарним індексом?BBACCCCKKKKKKKK
for (i = numbers.length - 1; i >= 0; i--) {

    if (i % 2 !== 0) {

        document.write(`<div>${numbers[i]}</div>`);
    }
}*/


/*
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом backkkkk
i = numbers.length;
while (i>=0) {
    if (i % 2 !== 0) {
        document.write(`<div>${numbers[i]}</div>`);

    }
    i--;
}*/


/*// 2. перебрати його циклом for back
for (i = numbers.length - 1; i >= 0; i--) {
    document.write(`<div>${numbers[i]}</div>`);
}*/

/*//     1. перебрати його циклом whileback
i = numbers.length-1;
while (i>=0) {
    document.write(`<div>${numbers[i]}</div>`);
    i--;
}*/
