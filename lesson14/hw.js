// function wakeUp(isWorkingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 resolve('wakeUp');
//             }
//             reject('sleep');
//         }, 1000);
//     });
// }
//
// function goEat(eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve(`cooking and eat ${eat}`);
//             }
//             reject('немає продуктів');
//
//         },700);
//     });
//
// }
//
// function goWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('working -_-');
//         }, 600);
//     });
// }
//
// function backToHome() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('back to home');
//         },2000);
//     });
// }
//
// function goToShower() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('waaaaashhhh');
//         },4000);
//     });
// }
//
// function eveningMeal(eat) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`cooking and eat  ${eat}`);
//         },350);
//     });
// }
//
// function rest() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('reeeest');
//         },6000);
//     });
// }
//
// function goSleep() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('sleeeeeeeeep');
//         }, 300);
//     });
//
// }
//
//
// wakeUp(true)
//     .then(morning => {
//         console.log(morning);
//         return goEat('пюрешка');
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return goWork();
//     })
//     .then(work => {
//         console.log(work);
//
//         return backToHome()
//     })
//     .then(back => {
//         console.log(back);
//
//         return goToShower()
//     })
//     .then(wash => {
//         console.log(wash);
//
//         return eveningMeal('pelmeshki')
//     })
//     .then(eat => {
//         console.log(eat);
//
//         return rest();
//     })
//     .then(rest => {
//         console.log(rest);
//
//         return goSleep()
//     })
//     .then(sleep => {
//         console.log(sleep)
//     })
//     .catch(reason => {
//         console.log('error', reason);
//     });

