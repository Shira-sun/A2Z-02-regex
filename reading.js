//the two ways to write expressions:
let re1 = RegExp("abc");
let re2 = /abc/;

//backlash for special characters:
let eighteenPlus = /eighteen\+/;

//test
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

//set of characters
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

/* dictionary:
\d = any digit
\w = alphanumeric character (word)
\s = white space character
\D = not a digit character
\W = nonalphanumeric character
\S = nonwhite space character
. = any character exept new line */

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2020 15:20"));

//select invert = ^
let notBinary = /[^01]/;
console.log(notBinary.test(11010009));

//repeating part of a pattern = +
console.log(/\d+/.test("123"));

//zero time = *
console.log(/\d*/.test("love"));

//optional = ?
let neighbor = /neighbo?r/;

//repititiom = {min, max}
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

//grouping subexpression = ()
//case insensative = i
let cryingBaby = /boo+(hoo+)+/i;
