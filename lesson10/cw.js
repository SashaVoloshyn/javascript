// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let info = document.getElementsByClassName('btnInfo')[0];
// info.onclick = function () {
//     let input1Form1 = document.forms.form1.form1Input1.value;
//     let input2Form1 = document.forms.form1.form1Input2.value;
//     let input1Form2 = document.forms.form2.form2Input1.value;
//     let input2Form2 = document.forms.form2.form2Input2.value;
//     console.log(input1Form1, input1Form2);
//     console.log(input2Form1, input2Form2);
// };



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let task2 = document.forms.task2;
let inffo = document.getElementsByClassName('task2Btn')[0];
let table = document.createElement('table');
document.body.append(table);
inffo.onclick = function () {
    let row = +task2.row.value;
    let cell = +task2.cell.value;
    let content = task2.content.value;


    console.log(row, cell, content);

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.append(td);
        }
        table.append(tr);

    }

};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let badWords= ['СЛОВО НА БУКВУ Х','СЛОВО НА БУКВУ У','СЛОВО НА БУКВУ П']
let badBtn = document.getElementsByClassName('task3Btn')[0];
badBtn.onclick = function () {
    let badWord = document.getElementById('badWord').value;
    for (const item of badWords) {
        if (item === badWord.toUpperCase()) {
            alert('-_-');
        }
    }

};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


let badBtn2 = document.getElementById('task4Btn')
badBtn2.onclick = function () {
    let badWord2 = document.getElementById('badWord2').value;
    for (const badElements of badWords) {
        if (badWord2.toUpperCase().includes(badElements)) {

            alert('-_-');
        }
    }

};

