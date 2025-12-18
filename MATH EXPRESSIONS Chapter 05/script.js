// Questions 01
let num1 = 3;
let num2 = 5;
document.write("<b>num1: ", num1, " num2: ", num2, "<br>")
document.write("Sum is: " + (num1 + num2) + "<br> <br>");
// Questions 02
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br> <br>");
// Questions 03 (a)
let num;
// Questions 03 (b)
document.write("Value after variable declaration is: " + num + "<br>");
// Questions 03 (c)
num = 5;
// Questions 03 (d)
document.write("Initial value: " + num + "<br>");
// Questions 03 (e)
num++;
// Questions 03 (f)
document.write("Value after increment is: " + num + "<br>");
// Questions 03 (g)
num = num + 7;
// Questions 03 (h)
document.write("Value after addition is: " + num + "<br>");
// Questions 03 (i)
num--;
// Questions 03 (j)
document.write("Value after decrement is: " + num + "<br>");
// Questions 03 (k)
let remainder = num % 3;
// Questions 03 (l)
document.write("The remainder is: " + remainder + "<br> <br>");
// Questions 04
let ticketPrice = 600;
let totalCost = ticketPrice* 5;
document.write("Total cost to buy 5 tickets to a movie is ", totalCost, "PKR<br><br>")
// Questions 05
let table = 4;
document.write("Table of ", table, "<br>")
for(let i =1; i<= 10; i++) {
  document.write(table + "x" + i + "=" + (table*i) + "<br>")
}
// Questions 06 (a)
let celsius = 25;
// Questions 06 (b)
let fahrenheit = (celsius * 9 / 5) + 32;
document.write("<br>", celsius, "<sup>0</sup>C is ", fahrenheit, "<sup>0</sup>F <br>")
// Questions 06 (c)
let ftemp = 70;
let ctemp = (70 - 32) * 5 / 9;
document.write(ftemp, "<sup>0</sup>F is ", ctemp, "<sup>0</sup>C<br><br>")
// Questions 07
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + priceItem2;
document.write("<h1>Shopping Cart</h1><br>")
// Questions 07 (a,b,c,d,e)
document.write("Price of item 1 is ", priceItem1, "<br>", "Quantity of item 1 is ", quantityItem1, "<br>", "Price of item 2 is ", priceItem2, "<br>", "Quantity of item 2 is ", quantityItem2, "<br>", "Shipping Charges ", priceItem2, "<br>")
document.write("<br>Total cost of your order is ", total, "<br><br>")
// Questions 08
let totalMarks = 980;
let marksObtained = 804;
let percentage = marksObtained / totalMarks * 100;
document.write("<h1>Marks Sheet</h1><br>")
document.write("Total marks: ", totalMarks, "<br>", "Marks obtined: ", marksObtained, "<br>", "Percentage: ", percentage, "%<br><br>")
// Questions 09
let totalCurrency = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1><br>")
document.write("Total Currency in PKR: ", totalCurrency, "<br>" )
// Questions 10 (a,b,c)
let results = (5 + 5) * 10 /2
document.write("<br>Results is: ", results, "<br><br>")
// Questions 11
let currentYear = 2025;
let birthYear = 2009;
document.write("<h1>Age Calculator</h1><br>")
// Questions 11 (a,b)
document.write("Current Year: ", currentYear, "<br>", "Birth Year: ", birthYear, "<br>", "Your Age is: ", (currentYear - birthYear), "<br>")
// Questions 11 (c)
document.write("They are either ", (currentYear - birthYear), " or ", (currentYear - birthYear - 1), "years old<br><br>")
// Questions 12
let radius = 20
document.write("<h1>The Geometrizer</h1><br>")
// Questions 12 (a,b)
document.write("Radius of a circle: ", radius, "<br>", "The circumference is: ", (3.142 * radius * 2), "<br>", "The area is ", (3.142 * radius * radius), "<br><br>")
// Questions 13
let favouriteSnack = "chocolate chip";
let currentAge = 15;
let maximumAge = 65;
let perDay = 3;
let totalSnack = (maximumAge - currentAge) * perDay;
document.write("<h1>The Lifetime Supply Calculator</h1><br>")
document.write("Favourite Snack: ", favouriteSnack, "<br>", "Current age: ", currentAge, "<br>", "Estimated Maximum Age: ", maximumAge, "<br>", "Amount of snack per day: ", perDay, "<br>", "You will need ", totalSnack, " ", favouriteSnack, " to last you until the ripe old age of ", maximumAge)