// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totallMarks = math + biology + chemistry + physics + bangla;
var averageMark = totallMarks / 5;

averageMark = averageMark.toFixed(2); 
averageMark = parseFloat(averageMark); //as if toFixed method return string that is why again converting the result in float
console.log(averageMark);
