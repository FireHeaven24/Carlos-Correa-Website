// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1994;
// birthYear = 1990;

// const job;

// var job = "programmer";
// job = "teacher";

// lastName = 'Correa';
// console.log(lastName);

// const now = 2037;
// const ageCarlos = now - 1991;
// const ageAce = now - 2019;
// console.log(ageCarlos * 2, ageAce / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Carlos";
// const lastName = "Correa";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10
// x += 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// //comparison operators
// console.log(ageCarlos > ageAce); // >, <, >=, <=
// console.log(ageAce >= 18);

// const isFullAge = ageAce >= 18;

// console.log(now - 1991 > now - 2018);
// const now = 2037;
// const ageCarlos = now - 1994;
// const ageAce = now - 1995;

// console.log(now - 1994 > now - 1995);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageCarlos + ageAce) / 2;
// console.log(ageCarlos, ageAce, averageAge);

// const firstName = "Carlos";
// const job = "programmer";
// const birthYear = 1994;
// const year = 2025;

// const Carlos =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(Carlos);

// const carlosNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(carlosNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
//   multiple \n\
//   lines"
// );

// console.log(`String
//     multiple
//     lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is not old enough to drive. Come back in ${yearsLeft} years`
//   );
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't speend it all");
// } else {
//   console.log("You should get a job");
// }

// let height = 123;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult :3 (loose)");

// if (age == 18) console.log("You just became an adult :3 (loose)");

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(typeof favorite);

// if (favorite === 23) {
//   // 23 === 23
//   console.log("Cool! 23 is an amazing nunmber!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favorite !== 23) console.log("why not 23?");

// const hasDriverLicense = true; //a
// const hasGoodVision = true; //b

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false; //c
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
}
