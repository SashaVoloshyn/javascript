// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// // виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,manufacturer,year,maxspeed,engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== "function") {
//                 console.log(`${carKey}  -  ${this[carKey]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(`${maxspeed + newSpeed}`);
//     };
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('a13', 'mazda', 2021, 400, 'hz');
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(300);
// car1.addDriver('Vasya');
// console.log(car1);
// car1.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//
//     constructor(model, manufacturer, year, maxspeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//
//     info() {
//         for (const carsKey in this) {
//             if (typeof this[carsKey] !== "function") {
//              console.log(`${carsKey}  -  ${this[carsKey]}`)
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(`${this.maxspeed + newSpeed}`);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
// let car1 = new Cars('a13', 'mazda', 2021, 400, 'hz');
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(300);
// car1.addDriver('Vasya');
// console.log(car1);
// car1.info();


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
//
// class Cinderella {
//     constructor(name, age, size, princeName,princeAge,princeSize) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
// }
//
// class Prince {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let cinderellaArray=[
//     new Cinderella('Anya',22,34),
//     new Cinderella('Vika',31,39),
//     new Cinderella('Julia',33,40),
//     new Cinderella('Olya',19,41),
//     new Cinderella('Leyla',15,36),
//     new Cinderella('Miya',18,37),
//     new Cinderella('Natalia',25,38),
//     new Cinderella('Avrora',16,36),
//     new Cinderella('Alisa',27,42),
//     new Cinderella('Viktor',43,47), // сучасна попелюшка
// ]
//
// let prince = new Prince('Jura', 24, 41);
//
// let xxx = (arr, prince) => {
//     for (const ciderella of arr) {
//         if (ciderella.size === prince.size) {
//             console.log(`з принцом повинна бути ${ciderella.name}  ${ciderella.age} років`)
//         }
//     }
// };
//
//
// xxx(cinderellaArray, prince);
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// console.log(cinderellaArray.find((cinderella) => cinderella.size === prince.size));