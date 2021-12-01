// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let monYear = document.getElementById('main_header');
monYear.classList.add('september-2021');
// b) робить шириниу елементу ul 400px
let widthUl = document.getElementsByTagName('ul');
for (const withUlElement of widthUl) {
    withUlElement.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLimk = document.getElementsByClassName('linkList');
for (const widthLimkElement of widthLimk) {
    widthLimkElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let addTxt = (txt) => {
    let list2El = document.getElementsByClassName('listElement2')
    for (const list2ElElement of list2El) {

        list2ElElement.innerText = 'wwwwwww';
    }
};
addTxt('wwwwwww');

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liColor = document.getElementsByTagName('li');
for (const liColorElement of liColor) {
    liColorElement.style.backgroundColor = 'silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aAnchor = document.getElementsByTagName('a');
for (const aAnchorElement of aAnchor) {
    aAnchorElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aLink3 = document.getElementsByTagName('a');
for (const aLink3Element of aLink3) {
    if (aLink3Element.innerText === 'link3') {
        aLink3Element.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElemen = document.getElementsByTagName('a');
for (const a of aElemen) {
    let aTxt = a.innerText;
    a.classList.add(aTxt);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
//
// let subCol = document.getElementsByClassName('sub-header');
// for (const subColElement of subCol) {
//     subColElement.style.backgroundColor = prompt('color?');
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let suuub = document.getElementsByClassName('sub-header');
// for (const suuubElement of suuub) {
//     if (suuubElement.innerText==='content 2 segment') {
//         suuubElement.style.color = prompt('color?');
//     }
// }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.innerText = prompt('enter TXT');
// }

// l) отримати елементи p та змінити їм padding на 20px
const pPading = document.getElementsByTagName('p');
for (const pPadingElement of pPading) {
    pPadingElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let txt2 = document.getElementsByClassName('text2');
for (const txt2Element of txt2) {
    txt2Element.innerText = 'sep-2021';
}