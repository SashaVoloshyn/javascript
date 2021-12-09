// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике
// на кнопку исчезал элемент с id="text".
let btn = document.getElementById('btn1');
btn.onclick = function () {
    document.getElementById('text').style.display = 'none';
};

// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn2 = document.createElement("button");
// btn2.classList.add('btn2');
// btn2.innerText = 'btn2';
// document.body.appendChild(btn2);
//
// btn2.onclick = function () {
//     this.style.display = 'none';
//
// };



// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let xxx = document.forms.user_age
// xxx.onsubmit = function (e) {
//     e.preventDefault()
//     if (this.userAge.value < 18) {
//         document.body.style.display = 'none';
//     }
//
// };


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     this.classList.toggle('menu2');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comArr=[
    {title : 'lorem ipson', body:'lorem ipsum dolo sit ameti 22'},
    {title : 'lorem 22', body:'lorem ipsum dolo sit ameti 11'},
    {title : 'lorem 332', body:'lorem ipsum dolo sit ameti 342'},
    {title : 'lorem 342' , body:'lorem ipsum dolo sit ameti 565'},
    {title : 'lorem 1114', body:'lorem ipsum dolo sit ameti 23412'}
]

for (const coment of comArr) {
    let comentWrap = document.createElement('div');
    comentWrap.classList.add('wrapp');
    let comentTitle = document.createElement('h2');
    comentTitle.innerText = coment.title;
    let comentBody = document.createElement('div');
    comentBody.innerText = coment.body;
    let comentBtn = document.createElement('button');
    comentBtn.innerText = coment.title +'  close';
    comentBtn.onclick = function () {
            comentBody.classList.toggle('close__body')
    };


    comentWrap.appendChild(comentTitle);
    comentWrap.appendChild(comentBody);
    comentWrap.appendChild(comentBtn);
    document.body.appendChild(comentWrap);

    
}