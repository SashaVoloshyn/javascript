
// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// // {
// //     id: 1,
// //     name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //     street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: {
// //         lat: '-37.3159',
// //             lng: '81.1496'
// //     }
// // },
// //     phone: '1-770-736-8031 x56442',
// //         website: 'hildegard.org',
// //     company: {
// //     name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// // }
// // }
//
// class User {
//     constructor(id, name, username, email ,addressStreet,addressSuite,addressCity,addressZipcode,geoLat,geoLng,phone,website,nameComp,catchPhraseComp,bsComp) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street:addressStreet, suite:addressSuite, city:addressCity,zipcode:addressZipcode, geo:{lat:geoLat,lng:geoLng }}
//         this.phone = phone;
//         this.website = website;
//         this.company = {name:nameComp,catchPhrase:catchPhraseComp, bs: bsComp}
//
//     }
//
//
// }
//
// let user1 = new User(1, 'Vasa', 'Pupkin', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(user1);

// // Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// //   назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
//
// class Tegs {
//     constructor(titleOfTag, action, titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [{titleOfAttr:titleOfAttr1, actionOfAttr: actionOfAttr1},{titleOfAttr:titleOfAttr2,
//             actionOfAttr: actionOfAttr2}]
//     }
// }
//
// const tegA = new Tegs('a', 'устанавливает ссылку или якорь.', 'href', 'Задает адрес документа, на который следует перейти.', 'type', 'Указывает MIME-тип документа, на который ведёт ссылка.');
// console.log(tegA);
// const tegDiv = new Tegs('div', 'Элемент |div| является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(tegDiv);
// const tegH1 = new Tegs('h1', 'h1 представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.', 'dir', 'Задает направление и отображение текста — слева направо или справа налево.');
// console.log(tegH1);
// const tegSpan=new Tegs('span','с помощью тега |span| можно выделить часть информации внутри других тегов и установить для нее свой стиль','contenteditable','Сообщает, что элемент доступен для редактирования пользователем.','class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
// console.log(tegSpan);
// const tegInput = new Tegs('input', 'Главным образом |input| предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. ', 'alt', 'Альтернативный текст для кнопки с изображением.', 'form', 'Связывает поле с формой по её идентификатору.');
// console.log(tegInput);
// const tegForm = new Tegs('form', 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.','enctype','Способ кодирования данных формы.','novalidate','Отменяет встроенную проверку данных формы на корректность ввода.');
// console.log(tegForm);
// const tegOption = new Tegs('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера |select|. ', 'disabled', 'Заблокировать для доступа элемент списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.');
// console.log(tegOption);
// const tegSelect = new Tegs('select', ' позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.', 'required', 'Список обязателен для выбора перед отправкой формы.');
// console.log(tegSelect);

function userCard(number) {
    if (number >= 1 && number <= 3) {
        let card = {
            balance: 100,
            transactionLimit: 100,
            historyLogs: [],
            key: number,

        };
        return {
            getCardOption: function () {
                return card;
            }
        }

    }
    else {
        console.log(`-_-`);
    }
}