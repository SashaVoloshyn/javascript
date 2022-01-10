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

// function wakeUp(isWorkingDay = true,cb) {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 cb(null,'wakeUp');
//                 return
//             }
//             cb('sleep');
//         }, 1000);
// }
//
// function goEat(eat,cb) {
//         setTimeout(() => {
//             if (eat) {
//                 cb(null,`cooking and eat ${eat}`);
//                 return
//             }
//             cb('немає продуктів');
//
//         },700);
//
// }
//
// function goWork(cb) {
//         setTimeout(() => {
//           return   cb(null,'working -_-');
//         }, 600);
// }
//
// function backToHome(cb) {
//         setTimeout(() => {
//            return  cb(null,'back to home');
//         },2000);
// }
//
// function goToShower(cb) {
//         setTimeout(() => {
//            return  cb(null,'waaaaashhhh');
//         },4000);
// }
//
// function eveningMeal(eat, cb) {
//     setTimeout(() => {
//        return  cb(null, `cooking and eat  ${eat}`);
//     }, 350);
// }
//
// function rest(cb) {
//     setTimeout(() => {
//        return  cb(null, 'reeeest');
//     }, 6000);
// }
//
// function goSleep(cb) {
//     setTimeout(() => {
//        return  cb(null,'sleeeeeeeeep');
//     }, 300);
// }
//
// wakeUp(true, (err, morning) => {
//     if (err) {
//         return console.error('oops', err);
//     }
//      console.log(morning);
//
//     goEat('pyureshka', (err, lunch) => {
//         if (err) {
//             console.error('oops', err);
//             return
//         }
//
//         console.log(lunch);
//
//         goWork((err, task) => {
//             if (err) {
//                 console.error('oops', err);
//                 return
//             }
//             console.log(task);
//
//             backToHome((err, backHome) => {
//                 if (err) {
//                     console.error('oops', err);
//                     return
//                 }
//                 console.log(backHome);
//
//                 goToShower((err, wash) => {
//                     if (err) {
//                         console.error('oops', err);
//                         return
//                     }
//                     console.log(wash);
//
//                     eveningMeal('makarohi', (err, food) => {
//                         if (err) {
//                             console.error('oops', err);
//                             return
//                         }
//                         console.log(food);
//
//                         rest((err, rest) => {
//                             if (err) {
//                                 console.error('oops', err);
//                                 return
//                             }
//                             console.log(rest);
//
//                             goSleep((err, sleep) => {
//                                 if (err) {
//                                     console.error('oops', err);
//                                     return
//                                 }
//
//                                 console.log(sleep);
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//
//     });
// });

