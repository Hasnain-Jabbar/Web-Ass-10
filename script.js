// node script.js
// Loop Exersise:


//1. Write a js program to print all natural numbers from 1 to n. - using while loop
var i = 1,
  n = 100;
while (i <= n) {
  console.log(i);
  i++;
}
//2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var i = 1,
  n = 100;
while (n >= i) {
  console.log(n);
  n--;
}
//3. Write a js program to print all alphabets from a to z. - using while loop
var ch = "a",
  ch2 = "z";
while (ch <= ch2) {
  console.log(ch);
  ch++;
}
//4. Write a js program to print all even numbers between 1 to 100. - using while loop
var i = 2,
  n = 100;
while (i <= n) {
  console.log(i);
  i = i + 2;
}
//5. Write a js program to print all odd number between 1 to 100.
var i = 1,
  n = 100;
while (i <= n) {
  console.log(i);
  i = i + 2;
}
//6. Write a js program to find sum of all natural numbers between 1 to n
var i = 1,
  n = 100,
  sum = 0;
while (i <= n) {
  sum = sum + i;
  i++;
}
console.log("The sum of first 100 natural numbers is =", sum);
//7.Write a js program to find sum of all even numbers between 1 to n.
var i = 2,
  n = 100;
sum = 0;
while (i <= n) {
  sum = sum + i;
  i = i + 2;
}
console.log("The sum of all even numbers between 1 to n is =", sum);
//8. Write a js program to find sum of all odd numbers between 1 to n.
var i = 1,
  n = 100,
  sum = 0;
while (i <= n) {
  sum = sum + i;
  i = i + 2;
}
console.log("The sum of all odd numbers between 1 to n is =", sum);

// Loop Exersise:
//1. Write a js program to find maximum between two numbers.
var a = 2,
  b = 3;
if (a > b) {
  console.log("'a' is greater than 'b'");
} else {
  console.log("'b' is greater than 'a'");
}
// 2. Write a js program to find maximum between three numbers.
var a = 2,
  b = 3,
  c = 4;
if (a > b && a > c) {
  console.log("'a' is the maximum number");
} else if (b > a && b > c) {
  console.log("'b' is the maximum number");
} else {
  console.log("'c' is the maximum number");
}
// 3. Write a js program to check whether a number is negative, positive or zero.
var a = 2;
if (a>0) {
  console.log("The number is positive");
} else if (a<0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var a = 2;
if (a%5==0 && a%11==0) {
  console.log("The number is divisible by 5 and 11");
}
else {
  console.log("The number is not divisible by 5 and 11");
}

// 5. Write a js program to check whether a number is even or odd.
var n = 2;
if (n%2==0) {
  console.log("The number is Even");
}
else {
  console.log("The number is Odd");
}

// 6. Write a js program to check whether a year is leap year or not.
var n = 2014;
if (n % 4 == 0) {
  console.log("It is a leap year");
}
else {
  console.log("It is not a leap year");
}

// 7. Write a js program to check whether a character is alphabet or not.
var n = 'd';
if (n >= 'a' && n <= 'z') {
  console.log("The Charater is alphabet.");
}
else {
  console.log("The Charater is not an alphabet.");
}

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant. 
var n = 'a';
if ( n == 'a' || n == 'A' || n == 'e' || n == 'E' || n == 'i' || n == 'I' || n == 'o' || n == 'O' || n == 'u' || n == 'U') {
  console.log("The Character is Vowel");
}
else {
  console.log("The Character is Consonant");
}

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
var n = '%';
if ((n >= 'a' && n <= 'z') || (n >= 'A' && n <= 'Z')) {
  console.log("The Character is alphabet");
}
else if(n>=0 || n<0) {
  console.log("The Character is Number");
}
else {
  console.log("The Character is Symbol");
}
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
var n ='g';
if (n >= 'a' && n <= 'z') {
  console.log("The Character is Lowercase alphabet");
}
else if(n >= 'A' && n <= 'Z') {
  console.log("The Character is Uppercase alphabet");
}
else {
  console.log("The Character is not alphabet.");
}
// 11. Write a js program to input week number and print week day.
var n = 4;
switch (n) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid Number")
        break;
}
// 12. Write a js program to input month number and print number of days in that month.
var n = 4;
switch (n) {
  case 1:
    console.log("There are 31 days in 1st month");
    break;
  case 2:
    console.log("There are 28 days in 2nd month");
    break;
  case 3:
    console.log("There are 31 days in 3rd month");
    break;
  case 4:
    console.log("There are 30 days in 4th month");
    break;
  case 5:
    console.log("There are 31 days in 5th month");
    break;
  case 6:
    console.log("There are 30 days in 6th month");
    break;
  case 7:
    console.log("There are 31 days in 7th month");
    break;
  case 8:
    console.log("There are 31 days in 8th month");
    break;
  case 9:
    console.log("There are 30 days in 9th month");
    break;
  case 10:
    console.log("There are 31 days in 10th month");
    break;
  case 11:
    console.log("There are 30 days in 11th month");
    break;
  case 12:
    console.log("There are 31 days in 12th month");
    break;
  default:
    console.log("Invalid Month Number");
    break;
}
// 13. Write a js program to count total number of notes in given amount.


// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
var angl1 = 120,
    angl2 = 45,
    angl3 = 45;
if (angl1 + angl2 + angl3 == 180) {
    console.log("Triangle is Valid");
}
else {
    console.log("Triangle is not Valid");
}
// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
var a = 120,
    b = 45,
    c = 45;
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Triangle is Valid");
}
else {
    console.log("Triangle is not Valid");
}
// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var a = 120,
    b = 46,
    c = 45;
if (a == b == c) {
    console.log("Triangle is Equilateral")
}
else if(a==b || a==c || b==c){
    console.log("Triangle is Isosceles")
}
else {
    console.log("Triangle is Invalid")
}
// 18. Write a js program to calculate profit or loss.
var sellingPrice = 60,
  purchasePrice = 100;
if (sellingPrice > purchasePrice) {
  profit = ((sellingPrice - purchasePrice) * 100) / sellingPrice;
  console.log("Profit is =%d\%", profit);
} else if (sellingPrice < purchasePrice) {
  loss = ((purchasePrice - sellingPrice) * 100) / sellingPrice;
  console.log("Loss is =%d\%", loss);
} else {
  console.log("There is no profit no loss");
}

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var phy = 64, math = 78, che = 65, bio = 68, comp = 76;
var Percentage = (phy + math + che + bio + comp) * 100 / 1100;
if (Percentage >= 90) {
    console.log("Your Grade is \"A\"");
} else if (Percentage >= 80) {
  
  console.log("Your Grade is \"B\"");
} else if (Percentage >= 70) {
  
  console.log("Your Grade is \"C\"");
} else if (Percentage >= 60) {
  
  console.log("Your Grade is \"D\"");
} else if (Percentage >= 40) {
  
  console.log("Your Grade is \"E\"");
} else{
    console.log("Your Grade is \"F\"");
}
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var basicSalary=29000;
var grossSalary=0;
if (basicSalary <= 10000) {
    grossSalary = (basicSalary / 100) * (20 + 80);
    console.log("Gross Salary is = %d",grossSalary);
} else if (basicSalary <= 20000 && basicSalary >= 10000) {
    grossSalary = (basicSalary / 100) * (25 + 90);
    console.log("Gross Salary is = %d",grossSalary);
} else {
    grossSalary = (basicSalary / 100) * (30 + 95);
    console.log("Gross Salary is = %d",grossSalary);
}
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
var units=125;
var bill=0;
if (units>0 && units <=50) {
    bill = 0.50 * units;
    console.log("Bill is =", bill);
} else if (units>50 && units <=150) {
    bill = 0.75 * units;
    console.log("Bill is =", bill);
} else if(units>150 && units <=250) {
    bill = 1.20 * units;
    console.log("Bill is =", bill);
}
else {
    bill = 1.50 * units;
    console.log("Bill is = ", bill);
}