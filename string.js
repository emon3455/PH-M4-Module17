
// string concatination
var firstName = "Ariyan";
var lastName = "Emon"
var fullName = firstName + " " + lastName;
console.log(fullName);

// string vs int concatination;
var x = 10;
var y = "20";
var z = x + y;
console.log(z)


// ------------type conversion--------------:

//converting string into int
y= parseInt(y);
var z = x + y;
console.log(z)

//converting string into float
var m = "3.87";
m = parseFloat(m);
var n = 3.22;
var a = m + n;
console.log(a);

// ---------------------------------------------------

// determind the type of variable:
var p = 10;
console.log(typeof p);

var q = "emon";
console.log(typeof q);

var r = false;
console.log(typeof r);

// ----------use of to fix------------
var e = 0.1;
var f = 0.2;
var g = e+f;
console.log(g); // 0.30000000000000004

// to solve this problem
var e = 0.1;
var f = 0.2;
var g = e+f;
g = g.toFixed(2);
g = parseFloat(g);
console.log(g);
console.log(17%5)
