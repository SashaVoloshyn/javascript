
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email ,addressStreet,addressSuite,addressCity,addressZipcode,geoLat,geoLng,phone,website,nameComp,catchPhraseComp,bsComp) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {street:addressStreet, suite:addressSuite, city:addressCity,zipcode:addressZipcode, geo:{lat:geoLat,lng:geoLng }}
        this.phone = phone;
        this.website = website;
        this.company = {name:nameComp,catchPhrase:catchPhraseComp, bs: bsComp}

    }


}

let user1 = new User(1, 'Vasa', 'Pupkin', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user1);