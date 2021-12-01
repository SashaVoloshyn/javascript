// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentTxt = document.getElementById('content');
console.log(contentTxt.innerText);
// -- отримує текст з блоку з id "rules"
let rulesTxt = document.getElementById('rules');
console.log(rulesTxt.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
rulesTxt.innerText = 'ssss';
// -- замініть текст параграфа з id 'rules' на будь-який інший
contentTxt.innerText = 'owwwwuuuuuuuuu';
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let colorr = document.body.children;
for (const colorrElement of colorr) {
    colorrElement.style.backgroundColor = 'red';
    colorrElement.style.color = 'blue';

}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rullClass = rulesTxt.classList;
console.log(rullClass);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let txtColorr = document.getElementsByClassName('fc_rules');
for (const txtColorrElement of txtColorr) {
    txtColorrElement.style.color = 'red';
}