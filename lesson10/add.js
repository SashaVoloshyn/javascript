// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// //     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.body.addEventListener('click', function (event) {
//     console.log(event.path[0].localName);
//     console.log('height =', event.path[0].offsetHeight);
//     console.log('width =', event.path[0].offsetWidth);
//     console.log(`height*width =`,event.path[0].offsetHeight * event.path[0].offsetWidth);
//     if (event.path[0].attributes.class) {
//         console.log(`class =`,event.path[0].attributes.class.value);
//     }
//     if (event.path[0].attributes.id) {
//         console.log(`id =`,event.path[0].attributes.id.value);
//     }
// });

// //
// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// //     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.body.addEventListener('click', function (event) {
//     let popup = document.createElement('div');
//     let popupBody = document.createElement('div');
//     let popupCont = document.createElement('div');
//     popup.style.position = 'fixed';
//     popup.style.width = '100%';
//     popup.style.height = '100%';
//     popup.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
//     popup.style.left = `0`;
//     popup.style.top = `0`;
//
//     popupBody.style.minHeight = '100%';
//     popupBody.style.display = 'flex';
//     popupBody.style.alignItems = 'center';
//     popupBody.style.justifyContent = 'center';
//     popupBody.style.padding = '40px 15px';
//
//     popupCont.style.backgroundColor = '#fff';
//     popupCont.style.color = '#000';
//     popupCont.style.minWidth = '700px';
//     popupCont.style.padding = '30px';
//     let wH = event.path[0].offsetHeight * event.path[0].offsetWidth;
//
//
//     if (event.path[0].attributes.class && event.path[0].attributes.id) {
//         popupCont.innerHTML = `<h2>${event.path[0].localName}<h2>
//                            <h4>height :  ${event.path[0].offsetHeight}</h4>
//                            <h4>width :  ${event.path[0].offsetWidth}</h4>
//                            <h4>width * height :  ${wH}</h4>
//                             <h3>id :    ${event.path[0].attributes.id.value}</h3>
//                            <h3>id :    ${event.path[0].attributes.id.value}</h3>
// `;
//
//     }else if (event.path[0].attributes.class) {
//
//         popupCont.innerHTML = `<h2>${event.path[0].localName}<h2>
//                            <h4>height :  ${event.path[0].offsetHeight}</h4>
//                            <h4>width :  ${event.path[0].offsetWidth}</h4>
//                            <h4>width * height :  ${wH}</h4>
//                             <h3>id :    ${event.path[0].attributes.id.value}</h3>
// `;
//     }else if (event.path[0].attributes.id) {
//         popupCont.innerHTML = `<h2>${event.path[0].localName}<h2>
//                            <h4>height :  ${event.path[0].offsetHeight}</h4>
//                            <h4>width :  ${event.path[0].offsetWidth}</h4>
//                            <h4>width * height :  ${wH}</h4>
//                             <h3>id :    ${event.path[0].attributes.id.value}</h3>
// `;
//     }
//     else {
//         popupCont.innerHTML = `<h2>${event.path[0].localName}<h2>
//                            <h4>height :  ${event.path[0].offsetHeight}</h4>
//                            <h4>width :  ${event.path[0].offsetWidth}</h4>
//                            <h4>width * height :  ${wH}</h4>
//
// `
//     }
//
//
//
//     popupBody.appendChild(popupCont);
//     popup.append(popupBody)
//     document.body.appendChild(popup);
// });

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];