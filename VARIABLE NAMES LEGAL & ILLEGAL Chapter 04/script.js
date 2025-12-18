// Questions 01
let statement = "<b> a,b,c </b>";
document.write("1. Declare 3 variables in one statement." + statement);
// Questions 02
let legal = "name, userName, _age, $price, my_1stvariable";
let illegal = "123name, user-name, my name, let, @price";
document.write("2. Declare 5 legal & 5 illegal variable names.<br> <br>legal :" + "<b>" + legal + "</b>" + "ilegal :" + "<b>" + illegal + "</b>");
// Questions 03
let heading = "<h1 style='margin:0px;'> Rules for naming JS variables</h1>";
let contain = "<b><h2 style='margin:0px;'>variable names can only contain<u>letters, number, $ and _.</h2></u>";
let begin= "<h2 style='margin:0px;'> variable must begin with a <u>letter, $ or _.</h2></u>";
let Case = "<h2 style='margin:0px;'> variable names are <u>case sensitive</h2></u>";
let Not = "<h2 style='margin:0px;'> variable names should not be <u> JavaScript Keywords</h2></u></b>";
document.write(heading + contain + begin + Case + Not);