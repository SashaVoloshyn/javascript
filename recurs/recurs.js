/*
// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
let a = +prompt();
let b = +prompt();
let x = '';

function rec1() {
    if (a < b) {
        a++;
        x += a + ' ';
        if (a >= b) {
            return;
        }
        rec1();
    }
    else if (a > b-1) {
        x += a + ' ';
        --a;
        if (a <= b-1) {

            return;
        }
        rec1();


    } else {
        document.write('-_-');
    }

}

rec1();
document.write(x);
*/


