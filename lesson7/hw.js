// // - Створити функцію конструктор для об'єктів User з полями id,
// // name, surname , email, phone
// // створити пустий масив, наповнитии його 10 об'єктами new User(....)
//
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
//
// let array = [
//     new User(1,'Sasha','Ahsas','Ahsas@gmail.com',380111111111),
//     new User(3,'Roma','Amor','Amor@gmail.com',380222222222),
//     new User(2,'Olya','Aylo','Aylo@gmail.com',380333333333),
//     new User(7,'Nina','Anin','Anin@gmail.com',380444444444),
//     new User(5,'Vasya','Aysav','Aysav@gmail.com',380555555555),
//     new User(4,'Nastya','Aytsan','Aytsan@gmail.com',380666666666),
//     new User(6,'Vika','Akiv','Akiv@gmail.com',380777777777),
//     new User(8,'Leyla','Alyel','Alyel@gmail.com',380888888888),
//     new User(10,'Anya','Ayna','Ayna@gmail.com',380999999999),
//     new User(9,'Vova','Avov','Avov@gmail.com',380101011010)
// ];
// console.log(array);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та
// // відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let arrFilter = array.filter((users) => {
//     if (users.id % 2 === 0) {
//         return users;
//     }
// });
// console.log(arrFilter);
//
// // - Взяти масив з  User[] з попереднього завдання,
// // та відсортувати його по id. по зростанню (sort)
//
// console.log(array.sort((a, b) => a.id - b.id));
//
// // - створити класс для об'єктів ' +
// // 'Client з полями id, name, surname , email, phone, order ' +
// // '(поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let clientArr = [
//     new Client(32,'Sasha','Ahsas','Ahsas@gmail.com',380111111111,['book1','book2','phone']),
//     new Client(11,'Roma','Amor','Amor@gmail.com',380222222222,['compucter','book','mp3']),
//     new Client(123,'Olya','Aylo','Aylo@gmail.com',380333333333,['compucter','book','item3','item4','item5']),
//     new Client(25,'Nina','Anin','Anin@gmail.com',380444444444,['compucter','book','item3','item4','item5','item6','item7']),
//     new Client(34,'Vasya','Aysav','Aysav@gmail.com',380555555555,['phone','book','item3']),
//     new Client(44,'Nastya','Aytsan','Aytsan@gmail.com',380666666666,['phone','book','item3','book2','book3']),
//     new Client(13,'Vika','Akiv','Akiv@gmail.com',380777777777,['phone','book','item3','book2']),
//     new Client(222,'Leyla','Alyel','Alyel@gmail.com',380888888888,['phone','book','item3','book2','book3','book4','book5','book6','boo7']),
//     new Client(432,'Anya','Ayna','Ayna@gmail.com',380999999999,['phone','book','item3','book2','book3','book4']),
//     new Client(431,'Vova','Avov','Avov@gmail.com',380101011010,['phone','book','item3','book2','book3','book43'])
// ];
// console.log(clientArr);
//
// // - Взяти масив (Client [] з попереднього завдання).
// // Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortClient = clientArr.sort((a, b) => a.order.length - b.order.length);
// console.log(sortClient);
