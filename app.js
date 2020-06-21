//                 //  CHAPTER 21-25
// // TASK#1

//  var a = prompt("First name")
//  var b = prompt("Second name")
//  var c = alert( a + b );
//  var e = a + b
//  var d = alert("Welcome To This Site " + e)

// //  TASK#2
 
// var a = prompt("Enter your favourite phone model")
// document.write(" My Favourite Phone Is: " + a + "<br>")
// var c = a.length
// document.write("Length Of String:" + c + "<br>" + "<br>")

// // TASK#3

// var a = "Pakistan"
// document.write("string:" + a + "<br>")
// var b = a.indexOf("n")
// document.write("Index Of n is" + b + "<br>" + "<br>")

// // TASK#4

// var a = "hello world"
// document.write("string:" + a + "<br>")
// var b = a.lastIndexOf("l")
// document.write("Last Index Of l :" + b + "<br>" + "<br>")

// // TASK#5

// var a = "Pakistani"
// document.write("string:" + a + "<br>")
// var b = a.charAt(3)
// document.write(" Character At Index 3 Is :" + b + "<br>" + "<br>")

// // TASK#6




// // TASK#7

// var a = "hyderabad"
// var indxnum = a.indexOf("hyder")
// var firstext= a.slice(0,indxnum)
// var replacing = "Islam"
// var thirdtext = a.slice(indxnum+5)
// document.write( "City:" + a + "<br>")
// document.write(" After Replacement: " + firstext + replacing + thirdtext + "<br>" + "<br>" )

// // TASK#8

// var message = "Ali and Sami are best friends They play cricket and football together"
// var indxnum = message.indexOf("and")
// var indxnum2 = message.lastIndexOf("and")
// var firstext = message.slice(0,indxnum)
// var firstext2 = message.slice(7,indxnum2)
// var replacing = "&"
// var thirdtext2 = message.slice(indxnum2 + 3)
// document.write(a + "<br>")
// document.write(" After Replacement: " + firstext +  replacing  +  firstext2 +  replacing + thirdtext2 + "<br>" + "<br>" )

// // TASK#9

// var a = "472"
// document.write("value:" + a + "<br>")
// document.write("Type:string" + " <br>")
// var b = Number(a)
// document.write("value:" + b + "<br>")
// document.write("Type: Number" + "<br>" + "<br>")


// // TASK#10

// var a = "peanuts"
// var b = a.toUpperCase()
// document.write("User Input = " + a + "<br>")
// document.write("Uppercase= " + b + "<br>" + "<br>")

// // TASK#11

// var a = "javascript"
// var b = a.slice(0,1)
// var c = b.toUpperCase()
// var d = a.slice(1)
// var e = d.toLowerCase()
// var f = c + e
// document.write("User Input = " + a + "<br>")
// document.write("Uppercase= " + f + "<br>" + "<br>")

// // TASK#12

// var a = "33.36"
// document.write("Number: " + a + "<br>")
// var b = a.replace(".", "")
// document.write("Result: " + b + "<br>" + " <br>")

// // TASK#13

// var arr = ["@" , "." , "," , "!"]
// var username = prompt("Enter Your Name")  
// if(username===["@"] ){
//     alert("Enter  A Valid Username")
// }
// else{
//     alert("welldone")
// }

// TASK#14

// var A = [ "cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var a = prompt("enter your item")
// if(A.indexOf(a) !== -1){
//     alert( a + "is available at index " + A.indexOf(a) + "in our bakery")
// }
// else{
//     alert("we are sorry" + a + "is not available in our bakery")
// }

// TASK#15

// var a = prompt("Enter password")

// if((a >="a" && a<="z") || ( a >= "A" && a<= "Z") && (a.indexOf(1)!==/^[0-9]+$/)){
//     alert("true")
// }

// else if ( a.charAt("") > 6 ){
//      alert("false")
// }

// else{
//     alert("false")
// }

// TASK#16

// var str = "U n i v e r s i t y o f K a r a c h i";
// var res = str.split(" ") ;
// document.write(res );

// TASK#17

// var a = prompt("Enter a word")
// var c = document.write("User Input: " + a + "<br>")
// var b = a.charAt(a.length-1);
// document.write("Last Character Of Input:" + b)

// TASK#18

// var text = prompt("Enter text") 
// var b = prompt("Enter word")
//  var letter_Count = 0;
//  for (var i = 0; i < text.length; i++) 
// {
//     if (text.charAt(i) == "the") 
//       {
//       letter_Count += 1;
//       }
// }
// document.write("Text:" + text + "<br>")
// document.write("There are " + letter_Count + "Occurence(s) of the word" + b )






                        // chapter 26-30(1)

// TASK#1

// var a = prompt("Enter A Positive integer")
// document.write("Number: " + a +  "<br>")
// var b = Math.round(a);
// document.write("Roundoff Value: " + b + "<br>")
// var c = Math.floor(a)
// document.write("Floor Value: " + c + "<br>")
// var d = Math.ceil(a)
// document.write("Ceil Value: " + d + "<br>")

// // TASK#2

// var a = prompt("Enter A Negative integer")
// document.write("Number: " + a +  "<br>")
// var b = Math.round(a);
// document.write("Roundoff Value: " + b + "<br>")
// var c = Math.floor(a)
// document.write("Floor Value: " + c + "<br>")
// var d = Math.ceil(a)
// document.write("Ceil Value: " + d + "<br>")

// TASK#3

// var a = +prompt("Enter Negative value")
// var b = Math.abs(a)
// document.write(" The Absolute Of Value " +  a + " is " + b)

// TASK#4

// var a = Math.random()*6
// var b = Math.floor(a)
// document.write("random dice value : " + b + "<br>")
// var c = Math.random()*6
// var d = Math.floor(c)
// document.write("random dice value : " + d)

// TASK#5

// var h = "head" 
// var t = "tail"
// var a = Math.random()*2
// var b = Math.ceil(a)
// if(b===2){
//     document.write(b + "<br>")
//     document.write("random coin value:" + h)
// }
// else{
//     document.write(b + "<br>")
//     document.write("random coin value:" + t)
// }

// TASK#6

// var a = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100 :" + a)

// TASK#7



// TASK#8

// var a = Math.floor(Math.random() * 10) + 1;
// var b = +prompt("enter number");
// if(b===a){
//     alert("congratulatons")
// }
// else{
//     alert("Try again!")
// }


// CHAPTER 31-34(1)

// TASK#1

// var  a = new Date();
// document.write(a)

// TASK#2

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var m = month[d.getMonth()];
// document.write("Current Month:" + m)

// TASK#3

// var d = new Date();
// var days = new Array();
// days[0] = "sun";
// days[1] = "mon";
// days[2] = "tue";
// days[3] = "wed";
// days[4] = "thu";
// days[5] = "fri";
// days[6] = "sat";
// var m = days[d.getDay()];
// document.write(" Today is : " + m )

// TASK#4

// var d = new Date();
// var a = d.getDay();
// if (a===6||0){
//     alert("its fun day")
// }
// else{
//     alert("its working day")
// }

// TASK#5

// var d = new Date;
// var a = d.getDate()
// if(a>15){
//     document.write("LAST DAYS OF THE MONTH")
// } 
// else{
//     document.write("FIRST FIFTEEN DAYS OF THE MONTH")
// }

// TASK#6

// var  time = new Date( "January 1,1970");

// var timemili = time.getTime()

// var today = new Date();
// document.write("Current Date :" + today + "<br>")
// var todaymili = today.getTime()
// var diff = todaymili - timemili
// var accurate = Math.floor(diff/1000*60*60*24*30*12)
// document.write("Elapsed milisecond since January 1,1970 :" + accurate + "<br>" )
// var accurate1 = Math.floor(diff/1000*60)
// document.write("Elapsed minutes since january 1,1970 :" + accurate1 + "<br>")

// TASK#7

// var a = new Date(new Date().getTime()).toLocaleTimeString();
// if(a>= 12){
//     document.write("It's PM")
// }
// else{
//     document.write("It's AM")
// }

// TASK#9

// var Date1 = new Date( " 6/17/2015 " )
// var Date2 = new Date( " 6/20/2020 " )
// var Difference_in_Time = Date2.getTime() - Date1.getTime();
// var Difference_in_Days = Difference_in_Time/ (1000*3600*24);
// document.write( Difference_in_Days + " days have passed since 1st Ramadan , 2020" );

// TASK#10

// var a = new Date( " 4/26/2019 " )
// var timesec = a.getTime();

// var b = new Date()
// var timesec1 = b.getTime()

// var diff = timesec1 - timesec

// var accurate = Math.floor(diff/1000)

// document.write("On reference date " + a + "," + accurate + " seconds had passed since begining of 2020 " )

// TASK#11

// var currentdate = new Date()
// document.write("Current Date :" + currentdate + "<br>");

// var b = new Date(new Date().getTime() + 60*60*1000)
// document.write(" 1 hour ago , it was " + b)

// TASK#12

// var currentyear = new Date()
// document.write("Current Date :" + currentyear + "<br>");

// var b = new Date(new Date().getTime() - (1000*60*60*12*6*20*6)*100)
// document.write(" 1 year ago , it was " + b)

// TASK#13

// var a = +prompt("Enter your birth year")
// document.write("Birth year is : " + a + "<br>")
// var d = new Date()
// var y = d.getFullYear()
// var b = y - a
// document.write("Your Age is : " + b + " yrs")

// TASK#14




                                               // chapter 35-38(1)

// TASK#1

// function date(){
//     return new Date()
// }
// var b = date()
// document.write(b)

// TASK#2

// var a = prompt("Enter first name")
// var b = prompt("Enter last name")
// function names(){
//     return a + b 
// }
// var c = alert("welcome to this page" + " " + names())

// TASK#3

// var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// function no(){
//      return a + b 
//  }
//  var c = alert(" sum of " + a + " and " + b + " is " + " " + no())

// TASK#4

// function calc(num1,opr,num2 ) {
//     if( opr === " + " ){
//         return num1 + num2
//     }
//     else if( opr === " - " ){
//         return num1 - num2
//     }
//     else if( opr === " * "){
//         return num1 * num2
//     }
// }
// var result = calc (4 , " + " , 1 )
// var result1 = calc (5 , " - " , 4)
// var result2 = calc (6 , " * " , 2 )
// alert(result)
// alert(result1)
// alert(result2)

// TASK#5

// var x = +prompt("Enter a number")
// function square(x){
//       return x*x
// }
// alert(square(x))

// TASK#6

// var num = +prompt("Enter a number")
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   document.write( factorialize(num));

// TASK#7  

// var a = +prompt("Enter starting number")
// var b = +prompt("Enter last number")
// function counting(){ 
//    for( i=a ; i<=b ; i++ ){ 
//     document.write(i + "<br>")
//         }
//     }
// counting()

// TASK#8

// var base = +prompt("Enter value of base")
// var perp = +prompt("Enter value of perpendicular")

// function calculateHypotenuse(){

//       function calculateSquare( ){
          
//         base=Math.pow(base,2)
//         perp=Math.pow(perp,2)
//         var sum = base+perp
//         var hyp = Math.sqrt(sum)
//       }
   
//       return calculateSquare

// }
// calculateHypotenuse()

// Task#9

// function areaofRec(){
//   var   A = width * height;
//     return A;

// }

// var c = areaofRec(width=5,height=6);
// document.write(c);

// TASK#10

// var word = prompt("Enter Word");
// var check = "";
// function palindrome(){  
// for(i= word.length - 1; i>=0; i--){
//     check += word[i]
// }
// if(word===check){
//     return ( word + " is a palindrome  word")
// }
// else{
//     return ( word + " is not a palindrome  word" )
// }
// }

// var c = palindrome();
// document.write(c)

// TASK#11

// function capital(){
//     var str = "the quick brown fox" ;
//     var res = 
//     document.write(res)
// }
// capital()

// TASK#13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count("ali likes to play cricket","e"))

// TASK#14

// function calcCircumference(){
//     var radius = 3
//     var circumference = 2*Math.PI*radius
//     return circumference
// }
// var c = calcCircumference()
// document.write("The circumference is" + " " + c)

// function calcArea(){
//     var radius = 3
//     var Area = Math.PI*(radius*radius)
//     return Area
// }
// var c = calcArea()
// document.write("The Area is" + " " + c)