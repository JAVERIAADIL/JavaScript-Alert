//chapter1

//question1


alert("Welcome! Hope you will have a good day")

//question2
alert("Error! Please enter a valid password.")

//question3
alert("Welcome to JS Land... \n Happy Coding!")

//question4
alert("Welcome to JS Land...")
alert("Happy Coding!  \n Prevent this page from creating additional dialogs.")


//chapter2
//question 1
var username;
//question2
var myName="Javeria Adil";

//question3
var message ="Hello World";
alert(message)

//question4
var name="Jhone Doe";
alert(name)
var age1="15 years old";
alert(age1)
var education="Certified Mobile Application Development";
alert(education)

//question5
var pizza="PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pizza)
 //question6
  var email="javeriazaman45@gmail.com";
  alert("My email address is " + email)

  //question7
  var book="A smarter way to learn JavaScript";
  alert("I am trying to learn from the Book. " +  book)

  //question8
  var y="Yah! I can write HTML content through Java Script";
  document.write(y)

  var x="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
  alert(x)
  document.write("<br>")
  document.write(x)


  //chapter3

  //question1
  var age=20;
  alert("I am " + age + " years old")

  //question2
  var visit=15;
  alert("You have visited this site "+ visit + " times")

  //question3
  var birthYear=1999;
  document.write("<br>")
  document.write("My birth year is "+ birthYear +"\n Data type of my declared variable is number.")

  //question4
  var visitor_name="John Doe"
  var Product="T-shirt"
  var quantity=5
  document.write("<br>")
  document.write(visitor_name+" ordered "+ quantity + " "+Product+" (s) on XYZ Clothing Store.")

  //chapter 4
  
  //question1
  var a=1; var b=2; var c=3;
  //question2 
  //legal 
  var num; var _num; var num1; var numVar; var $num;
  //illegal
 // var 1num; var 1; var num 1; var 1 2; var alert;

 //question5

 var heading=("<h1>"+"Rules for naming JS variables"+"</h1>");

 var rule1=("Variable names can only contain names, lettes, $ and _. For example $my_1stVariable.");
 var rule2=(" Variables must begin with a letter, $ or _. For example $name, _name or name.");
 var rule3=(" Variable names are case sensitive.");
 var rule4=("Variable names should not be JS keywords.");

 document.write( "<br>"+ heading+"<br>" +rule1+"<br>"+rule2+"<br>"+rule3+"<br>"+rule4 )
  

 //chapter5

 //question1
 var a=3;
 var b=5;
 var c=a+b;
 document.write("<br>")
 document.write("Sum of "+a+" and "+b +" is " +c)

 //question2
 //a
 var d=3;
 var e=5;
 var f=e-d;
 document.write("<br>")
 document.write("Subtraction of "+e+" is "+d +" is " +f)

 //b
 var g=3;
 var h=5;
 var i=g*h;
 document.write("<br>")
 document.write("Multiplication of "+g+" and "+h +" is " +i)

 //c
 var j=10;
 var k=5;
 var l=j/k;
 document.write("<br>")
 document.write("Division of "+j+" and "+k +" is " +l)

 //d
 var m=12;
 var n=5;
 var o=m%n;
 document.write("<br>")
 document.write("Modulus of "+m+" and "+n +" is " +o)


 //question3
 var x;
 document.write( "<br>"+"Value after variable declaration is : ??" )
 x=5;
 document.write( "<br>"+"Initial value: " + x )
 x=x+1;
 document.write( "<br>"+ "Value after increment is : " + x )
 x=x+7;
 document.write( "<br>"+"Value after addition is: " +x)
 x=x-1;
 document.write( "<br>"+"Value after decrement is : "+x)
 x=x%3;
 document.write( "<br>"+ "The reminder is : "+x )

 //question4
 var ticket=600;
 var tickets=600*5;
 document.write( "<br>"+ "Total cost to buy 5 tickets to a movie is "+ tickets )

 //question5
 var x=4;
 var x1=x*1;
 var x2=x*2;
 var x3=x*3;
 var x4=x*4;
 var x5=x*5;
 var x6=x*6;
 var x7=x*7;
 var x8=x*8;
 var x9=x*9;
 var x0=x*10;
 document.write( "<br>"+ "Table of  "+ x+" is " )
 document.write( "<br>"+ "4x1="+ x1 )
 document.write( "<br>"+ "4x2="+ x2 )
 document.write( "<br>"+ "4x3="+ x3 )
 document.write( "<br>"+ "4x4="+ x4 )
 document.write( "<br>"+ "4x5="+ x5 )
 document.write( "<br>"+ "4x6="+ x6 )
 document.write( "<br>"+ "4x7="+ x7 )
 document.write( "<br>"+ "4x8="+ x8 )
 document.write( "<br>"+ "4x9="+ x9 )
 document.write( "<br>"+ "4x10="+ x0 )

 //question6
 var cal=25;
 var fa=(cal * 9/5)+32;
 document.write( "<br>"+ cal+"\xB0"+"C is "+fa+"\xB0"+"F" )
 var fah=70;
 var ca=(fah-32)*5/9;
 document.write( "<br>"+ fah+"\xB0"+"F is "+ca+"\xB0"+"C" )

 //question7

 var item1=650;
 var item2=100;
 var quan1=3;
 var quan2=7;
 var ship=100;
 var total=650*3+100*7+100;
 var heading=("<h1>"+"Shopping Cart"+"</h1>");
 document.write( "<br>"+ heading)
 document.write( "<br>"+ "Price of item 1 is "+ item1 )
 document.write( "<br>"+ "Quantity of item 1 is "+ quan1 )
 document.write( "<br>"+ "Price of item 2 is "+ item2 )
 document.write( "<br>"+ "Quantity of item 2 is "+ quan2 )
 document.write( "<br>"+ "Shipping Charges " + ship )

 document.write( "<br>"+ " Total cost of your order is "+ total )

 //question8
 var total=980;
 var obtained=800;
 var percent=(800/980)*100;
 var heading=("<h1>"+"Marks Sheet"+"</h1>");
 document.write( "<br>"+ heading)
 document.write( "<br>"+ "Total marks: "+ total )
 document.write( "<br>"+ "Marks obtained: "+ obtained )
 document.write( "<br>"+ "Percentage: "+ percent+"%" )


//question9
var us=10;
var riyal=25;
var pkr=(10*104.80)+(25*28);
var heading=("<h1>"+"Currency in PKR"+"</h1>");
document.write( "<br>"+ heading)
document.write( "<br>"+ "Total Currency in PKR is: "+ pkr )

//question10
var y=7;
var total=((y+5)*10)/2
var heading=("<h1>"+"Calculation"+"</h1>")
document.write( "<br>"+ heading)
document.write( "<br>"+ "Total is: "+ total)

//question11
var current=2020;
var birth=1998;
var age=current-birth;
var age1=(current-birth)-1;
var heading=("<h1>"+"Age Calculator"+"</h1>");
document.write( "<br>"+ heading)
document.write( "<br>"+ "Current Year: "+ current)
document.write( "<br>"+ "Birth Year: "+ birth)
document.write( "<br>"+ "Your Age is : "+ age+" OR Either this: "+age1)

//question11
var rad=20;
var circum=2*3.142*rad;
var area=3.142*rad^2;
var heading=("<h1>"+"The Geometrizer"+"</h1>");
document.write( "<br>"+ heading)
document.write( "<br>"+ "Radius of a circle : "+ rad)
document.write( "<br>"+ "The circumference is : "+ circum)
document.write( "<br>"+ "The area is : "+ area)

//question13
var snack="Chocolate";
var age=20;
var maxage=70;
var perday=7;
var need=(maxage-age)*perday;
var heading=("<h1>"+"The Lifetime Supply Calculator"+"</h1>")
document.write( "<br>"+ heading)
document.write( "<br>"+ "Favourite Snack : "+ snack)
document.write( "<br>"+ "Current age : "+ age)
document.write( "<br>"+ "Estimated Maximum Age : "+ maxage)
document.write( "<br>"+ "Amount of snacks per day : "+ perday)
document.write( "<br>"+ "You will need "+ need+ snack+" to last you until the ripe old age of "+maxage)

//chapter6-9
//question1
var a=10;
document.write( "<br>"+ "Result : ")
document.write( "<br>"+ "The value of a is: "+ a)
document.write( "<br>"+ "........................ ")

a=a+1;
document.write( "<br>"+ "The value of ++a is "+ a)
document.write( "<br>"+ "Now the value of a is  "+ a)

a=a++;
document.write( "<br>"+ "The value of a++ is "+ a)
document.write( "<br>"+ "Now the value of a is  "+ ++a)

a=a-1;
document.write( "<br>"+ "The value of --a is "+ a)
document.write( "<br>"+ "Now the value of a is  "+ a)
a=a--;
document.write( "<br>"+ "The value of a-- is "+ a)
document.write( "<br>"+ "Now the value of a is  "+ --a)
//question2
document.write( "<br>"+ "a is 2")
document.write( "<br>"+ "b is 1")

//--a;
document.write( "<br>"+ " now output is 1")
 //--a - --b; 
 document.write( "<br>"+ " now output is 1")
 //--a - --b + ++b;
 document.write( "<br>"+ " now output is 2")
 // --a - --b + ++b + b--;
 document.write( "<br>"+ " Result is 3")




//question3
var name=prompt("Enter your name:");
document.write( "<br>"+ " Welcomme" + name)


//question5 


var y=+prompt("Enter a number:");
var x1=x*1;
 var x2=x*2;
 var x3=x*3;
 var x4=x*4;
 var x5=x*5;
 var x6=x*6;
 var x7=x*7;
 var x8=x*8;
 var x9=x*9;
 var x0=x*10;
 document.write( "<br>"+ "Table of  "+ x+" is " )
 document.write( "<br>"+ x+"x1="+ x1 )
 document.write( "<br>"+ x+"x2="+ x2 )
 document.write( "<br>"+ x+"x3="+ x3 )
 document.write( "<br>"+ x+"x4="+ x4 )
 document.write( "<br>"+ x+"x5="+ x5 )
 document.write( "<br>"+ x+"x6="+ x6 )
 document.write( "<br>"+ x+"x7="+ x7 )
 document.write( "<br>"+ x+"x8="+ x8 )
 document.write( "<br>"+ x+"x9="+ x9 )
 document.write( "<br>"+ x+"x10="+ x0 )
 var x=+prompt("Enter a new number:");
 if (y==x){
     var x=5;
     var x1=x*1;
 var x2=x*2;
 var x3=x*3;
 var x4=x*4;
 var x5=x*5;
 var x6=x*6;
 var x7=x*7;
 var x8=x*8;
 var x9=x*9;
 var x0=x*10;
 document.write( "<br>"+ "Table of  "+ x+" is " )
 document.write( "<br>"+ x+"x1="+ x1 )
 document.write( "<br>"+ x+"x2="+ x2 )
 document.write( "<br>"+ x+"x3="+ x3 )
 document.write( "<br>"+ x+"x4="+ x4 )
 document.write( "<br>"+ x+"x5="+ x5 )
 document.write( "<br>"+ x+"x6="+ x6 )
 document.write( "<br>"+ x+"x7="+ x7 )
 document.write( "<br>"+ x+"x8="+ x8 )
 document.write( "<br>"+ x+"x9="+ x9 )
 document.write( "<br>"+ x+"x10="+ x0 )

 }
 else{
    var x1=x*1;
    var x2=x*2;
    var x3=x*3;
    var x4=x*4;
    var x5=x*5;
    var x6=x*6;
    var x7=x*7;
    var x8=x*8;
    var x9=x*9;
    var x0=x*10;
    document.write( "<br>"+ "Table of  "+ x+" is " )
    document.write( "<br>"+ x+"x1="+ x1 )
    document.write( "<br>"+ x+"x2="+ x2 )
    document.write( "<br>"+ x+"x3="+ x3 )
    document.write( "<br>"+ x+"x4="+ x4 )
    document.write( "<br>"+ x+"x5="+ x5 )
    document.write( "<br>"+ x+"x6="+ x6 )
    document.write( "<br>"+ x+"x7="+ x7 )
    document.write( "<br>"+ x+"x8="+ x8 )
    document.write( "<br>"+ x+"x9="+ x9 )
    document.write( "<br>"+ x+"x10="+ x0 )
    

 }

 //question6
 var subj1=prompt("Enter first subject");
 var subj2=prompt("Enter second subject");
 var subj3=prompt("Enter third subject");
 var total=100;
 var totalmarks=total+total+total
  var marks1=+prompt("Enter your first subjects marks");
 var marks2=+prompt("Enter your second subjects marks");
 var marks3=+prompt("Enter your third subjects marks");
 var totalobtained=marks1+marks2+marks3;
 var percent1=(marks1/total)*100;
 var percent2=(marks2/total)*100;
 var percent3=(marks3/total)*100;
 var totalpercent=percent1+percent2+percent3;
 document.write("<table>"+
    "<tr>"+
    "<th>"+ "Subjects"+"</th>"+
    "<th>"+ "Total Marks"+"</th>"+
    "<th>"+ "Obtained Marks"+"</th>"+
    "<th>"+ "Percentage"+"</th>"+
    
    "</tr>"+
    "<tr>"+
    
    "<td>"+subj1+"</td>"+
    "<td>"+total+"</td>"+
    "<td>"+marks1+"</td>"+
    "<td>"+percent1+"</td>"+
    
    "</tr>"+
    "<tr>"+
    
    "<td>"+subj2+"</td>"+
    "<td>"+total+"</td>"+
    "<td>"+marks2+"</td>"+
    "<td>"+percent2+"</td>"+
    
    "</tr>"+
    "<tr>"+
    
    "<td>"+subj3+"</td>"+
    "<td>"+total+"</td>"+
    "<td>"+marks3+"</td>"+
    "<td>"+percent3+"</td>"+
    
    "</tr>"+

    "<tr>"+
    
    "<th>"+"</th>"+
    "<th>"+totalmarks+"</th>"+
    "<th>"+totalobtained+"</th>"+
    "<th>"+totalpercent+"</th>"+
    
    "</tr>"+
    
    "</table>")

    //chap12-13
    //question1

    var x=prompt("Enter a character you want");
    if (x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90){
        document.write("<br>")
        document.write(x+ " is upper case letter")
    }
    else if (x.charCodeAt(0)>=97 && x.charCodeAt(0)<=122){
        document.write("<br>")
        document.write(x+ " is lower case letter")
    }
    else{
        document.write("<br>")
        document.write(x+ " is a number or any other character")
    }

    //question2

    var x=+prompt("Enter first number");
    var y=+prompt("Enter second number");
    if (x>y){
        document.write("<br>")
        document.write(x)
    }
    else if (x<y){
        document.write("<br>")
        document.write(y)
    }
     else if (x==y){
        document.write("<br>")
        document.write("Both are equal")
    }
    else{
        document.write("<br>")
        document.write("Enter right number")
    }

    //question3

    var z=+prompt("Enter a number");
    if (z<0){
        document.write("<br>")
        document.write("Your number is negative")
    }
    else if (z>0){
        document.write("<br>")
        document.write("Your number is positive")
    }
    else{
        document.write("<br>")
        document.write("Your number is equal to zero")
    }

    //question4
    var z=prompt("Enter a single character");
    if (z=="a"|| z=="e" || z=="i" || z=="o" || z=="u"){
        document.write("<br>")
        document.write("True")
    }
    else{
        document.write("<br>")
        document.write("False")

    }

 
//question5
var pass="javeriaharris";
var userpass=prompt("Enter your password");
if (userpass==""){
    document.write("<br>")
    document.write("Please enter your password")
}
else{
    document.write("<br>")
    document.write("Password entered! Wait for checking")
    if (pass==userpass){
        document.write("<br>")
        document.write("Correct! The password you entered matches the original password")
    }
    else{
        document.write("<br>")
        document.write("Incorrect Password")
    }
}

//question6
var greeting; 
var hour = 13;
 if (hour < 18) {
     greeting = "Good day"; }
else{
      greeting = "Good evening"; }

//question7

var time=+prompt("Input time in format of 24 hours clock")
if (time>=0000 && time<1200){
    document.write("<br>")
    document.write("Good Morning!")
}
else if (time>=1200 && time<1700){
    document.write("<br>")
    document.write("Good Afternoon!")
}
else if (time>=1700 && time<2100){
    document.write("<br>")
    document.write("Good Evening!")
}
else if (time>=2100 && time<=2359){
    document.write("<br>")
    document.write("Good Night!")
}
else {
    document.write("<br>")
    document.write("Please enter correct time")
}

//chapter 9-11
//question1
 var city=prompt("Enter your city");
 if (city=="karachi"){
    document.write("<br>")
    document.write("Welcome to city of lights")

 }
 else{
    document.write("<br>")
    document.write("Welcome "+ city)
 }

 //question2
 var gender=prompt("Enter gender");
 if (gender="male"){
    document.write("<br>")
    document.write("Good Morning Sir")

 }
 else if (gender="female"){
    document.write("<br>")
    document.write("Good Morning Madam")

 }
else{
    document.write("<br>")
    document.write("Please write correct input")

}
//question3

var color=prompt("Enter color of signal");
if (color="red"){
    document.write("<br>")
    document.write("Must Stop")

 }
 else if (color="yellow"){
    document.write("<br>")
    document.write("Ready to move")

 }
 else if (color="green"){
    document.write("<br>")
    document.write("Move now")

 }


else{
    document.write("<br>")
    document.write("Please write correct input")

}
//question4


var fuel=+prompt("Enter fuel in litres");
if (fuel< 0.25){
    document.write("<br>")
    document.write("Please refill the fuel in your car")

 }
 else{
    document.write("<br>")
    document.write("You have enough to drive a car")

}

//question5
//a
var a = 4; 
if (++a === 5){
     alert("given condition for variable a is true"); }

     //output is given condition for variable a is true
//b
 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); }
     //no alert box
//c
 var c = 12;
  if (c++ === 13){
       alert("condition 1 is true"); } 
       if (c === 13){ 
           alert("condition 2 is true"); } 
       if (++c < 14){
            alert("condition 3 is true"); }
        if(c === 14){
             alert("condition 4 is true"); }
            //output gives 2 alert boxs
             //condition 2 is true
             //condition 4 is true
//d             
 var materialCost = 20000;
  var laborCost = 2000;
   var totalCost = materialCost + laborCost; 
   if (totalCost === laborCost + materialCost){ 
       alert("The cost equals"); }

       //output is The cost equals
//e
 if (true){ 
     alert("True"); }
      if (false){
          alert("False"); }
          //output is true
//f
if("car" < "cat"){ 
    alert("car is smaller than cat");}
    //output is car is smaller than cat

//question6
var total1=+prompt("Enter total of your first subjects marks");
 var total2=+prompt("Enter total of your second subjects marks");
 var total3=+prompt("Enter total of your third subjects marks");

 var totalmarks=total1+total2+total3
  var marks1=+prompt("Enter your first subjects marks");
 var marks2=+prompt("Enter your second subjects marks");
 var marks3=+prompt("Enter your third subjects marks");
 var totalobtained=marks1+marks2+marks3;
 var percent=(totalobtained/totalmarks)*100;
 var heading=("<h1>"+"Marks Sheet"+"</h1>")
document.write( "<br>"+ heading)
 if (percent>=80 && percent<=100){
    document.write("<br>")
    document.write("Total marks : " +totalmarks)
    document.write("<br>")
    document.write("Marks obtained : " +totalobtained)
    document.write("<br>")
    document.write("Percentage : " +percent+"%")
    document.write("<br>")
    document.write("Grade : A-ONE " )
    document.write("<br>")
    document.write("Remarks : Excellent" )
}
else if (percent>=70 && percent<80){
    document.write("<br>")
    document.write("Total marks : " +totalmarks)
    document.write("<br>")
    document.write("Marks obtained : " +totalobtained)
    document.write("<br>")
    document.write("Percentage : " +percent+"%")
    document.write("<br>")
    document.write("Grade : A " )
    document.write("<br>")
    document.write("Remarks : Good" )
}
else if (percent>=60 && percent<70){
    document.write("<br>")
    document.write("Total marks : " +totalmarks)
    document.write("<br>")
    document.write("Marks obtained : " +totalobtained)
    document.write("<br>")
    document.write("Percentage : " +percent+"%")
    document.write("<br>")
    document.write("Grade : B " )
    document.write("<br>")
    document.write("Remarks : You need to improve" )
}
else if ( percent< 60){
    document.write("<br>")
    document.write("Total marks : " +totalmarks)
    document.write("<br>")
    document.write("Marks obtained : " +totalobtained)
    document.write("<br>")
    document.write("Percentage : " +percent+"%")
    document.write("<br>")
    document.write("Grade : Fail " )
    document.write("<br>")
    document.write("Remarks : Sorry" )
}
else{
    document.write("<br>")
    document.write("Please write correct input")

}
//question7
 var secret=5;
 var add=secret+1;
 var user=+prompt("Enter your guess number in range og 1-10");
 if (user===secret){
    document.write("<br>")
    document.write("Bingo! Correct Answer")
 }
 else if (user===add){
    document.write("<br>")
    document.write("Close enough to the correct answer")

 }
 else{
    document.write("<br>")
    document.write("Wrong Answer! Try again")
 }
//question8
var y=+prompt("Enter a number");
if (y%3==0){
    document.write("<br>")
    document.write(y+" is divisible by 3.")
}
else{
    document.write("<br>")
    document.write(y+" is not divisible by 3.")
}
//question9
var y=+prompt("Enter a number");
if (y%2==0){
    document.write("<br>")
    document.write(y+" is even number.")
}
else{
    document.write("<br>")
    document.write(y+" is odd number.")
}
//question10
var temp=+prompt("Enter temperature");
if (temp>40){
    document.write("<br>")
    document.write("It is too hot outside. ")
}
else if (temp>30){
    document.write("<br>")
    document.write("The weather today is normal. ")
}
else if (temp>20){
    document.write("<br>")
    document.write("Today's weather is cool.")
}
else if (temp>10){
    document.write("<br>")
    document.write("OMG! Today's weather is so Cool. ")
}
else{
    document.write("<br>")
    document.write("Please write correct input")

}
//question11
var a=+prompt("Enter first number");
var b=+prompt("Enter second number");
var c=prompt("Enter operation you want to perform");
if (c=="+"){
    var d=a+b;
    document.write("<br>")
    document.write("Your answer is "+d)
}
else if (c=="-"){
    var d=a-b;
    document.write("<br>")
    document.write("Your answer is "+d)
}
else if (c=="*"){
    var d=a*b;
    document.write("<br>")
    document.write("Your answer is "+d)
}
else if (c=="/"){
    var d=a/b;
    document.write("<br>")
    document.write("Your answer is "+d)
}
else if (c=="%"){
    var d=a%b;
    document.write("<br>")
    document.write("Your answer is "+d)
}
else{
    document.write("<br>")
    document.write("Please write correct input")

}

//chap14-16
//question1
var arr=[""];
//question2
var arr1=newarr("");
//question3
var string=["A","B","C"];
//question4
var num=[1,2,3];
//question5
var boolean=[0,1,01,10];
//question6
var mix=["A",0,5];
//question7
var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
var heading=("<h1>"+"Qualification"+"</h1>")
document.write( "<br>"+ heading)
document.write( "<br>"+ "1) " + qual[0])
document.write( "<br>"+ "2) " + qual[1])
document.write( "<br>"+ "3) " + qual[2])
document.write( "<br>"+ "4) " + qual[3])
document.write( "<br>"+ "5) " + qual[4])
document.write( "<br>"+ "6) " + qual[5])
document.write( "<br>"+ "7) " + qual[6])
document.write( "<br>"+ "8) " + qual[7])



//question8
var student=["Michael","John","Tony"];
var score=[320,230,480];
var total=500;
var percent1=(score[0]/total)*100;
var percent2=(score[1]/total)*100;
var percent3=(score[2]/total)*100;

var heading=("<h1>"+"Sheet"+"</h1>")
document.write( "<br>"+ heading)
document.write( "<br>"+ "Score of " + student[0]+ " is"+ score[0] +". Percentage :"+percent1)
document.write( "<br>"+ "Score of " + student[1]+ " is"+ score[1] +". Percentage :"+percent2)
document.write( "<br>"+ "Score of " + student[2]+ " is"+ score[2] +". Percentage :"+percent3)


//question9
var color=["Red","Yellow" ,"Green"];
var heading=("<h1>"+"Colors"+"</h1>")
document.write( "<br>"+ heading)
document.write( "<br>"+ color)
//a
var x=prompt("Enter color you want to add in beginning");
y=color.unshift(x);
document.write( "<br>"+ y)

//b
var b=prompt("Enter color you want to add in end");
z=y.push(b);
document.write( "<br>"+ z)

//c
e=z.unshift("Blue","Black");
document.write( "<br>"+ e)
//d
g=e.shift();
document.write( "<br>"+ g)
//e
h=g.pop();
document.write( "<br>"+ h)


//f
var color=prompt("Enter color you want to add");
var ind=+prompt("Enter index");
k=h.splice(ind,0,color);
document.write( "<br>"+ k)

//g
var color=+prompt("Enter how many colors you want to delete");
var ind=+prompt("Enter index");
j=k.splice(ind,color);
document.write( "<br>"+ k)

//question10
var score=[320,230,480,120];
document.write( "<br>"+"Scores of Students: "+ score)
var o=score.sort();

document.write( "<br>"+"Ordered Scores of Students: "+ o)

//question11
 var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
 document.write( "<br>"+"Cities list: "+ "<br>"+cities)

 var selected_cities=cities.slice(2,4);
 document.write( "<br>"+"Selected Cities list: "+ "<br>"+ selected_cities)
 
 //question12
 var arr=["This","is","my","cat"];
 var arr1=arr.join();
 document.write( "<br>"+"Array: "+ "<br>"+ arr1)

 var arr2=arr.join("");
 document.write( "<br>"+"String: "+ "<br>"+ arr2);

 //question13
 var dev=["keyboard","mouse","printer","monitor"];
 var dev1=dev.join();
 document.write( "<br>"+"Devices: "+ "<br>"+ dev);
 var a=dev.shift();
 document.write( "<br>"+"Out: "+ "<br>"+ a);
 var b=dev.shift();
 document.write( "<br>"+"Out: "+ "<br>"+ b);
 var c=dev.shift();
 document.write( "<br>"+"Out: "+ "<br>"+ c);
 var d=dev.shift();
 document.write( "<br>"+"Out: "+ "<br>"+ d);

 //question14
 var dev=["keyboard","mouse","printer","monitor"];
 var dev1=dev.join();
 document.write( "<br>"+"Devices: "+ "<br>"+ dev);
 var a=dev.pop();
 document.write( "<br>"+"Out: "+ "<br>"+ a);
 var b=dev.pop();
 document.write( "<br>"+"Out: "+ "<br>"+ b);
 var c=dev.pop();
 document.write( "<br>"+"Out: "+ "<br>"+ c);
 var d=dev.pop();
 document.write( "<br>"+"Out: "+ "<br>"+ d);

 //question15


 var score = [320, 230, 480, 120];
 document.write("<br>" + "Scores of Students: " + score)
 var o = score.sort();
 
 document.write("<br>" + "Ordered Scores of Students: " + o)
 var dev = ["keyboard", "mouse", "printer", "monitor"];
 var dev1 = dev.join();
 document.write("<br>" + "Devices: " + dev);
 var a = dev.shift();
 document.write("<br>" + "Out: " + a);
 var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
 document.write("<br>")
 document.write(" <div >" + "<h1>" + "MENU" + "</h1>" + "<br>" + "<p>" + arr[0] + "</p>" +
     "<br>" + "<p>" + arr[1] + "</p>" +
     "<br>" + "<p>" + arr[2] + "</p>" +
     "<br>" + "<p>" + arr[3] + "</p>" +
     "<br>" + "<p>" + arr[4] + "</p>" +
     "<br>" + "<p>" + arr[5] + "</p>")
 //chap17-20
 //question1
 var arr = [
     ["",],
     ["",],
     ["",],
     ["",],
 
 ]
 //question2
 
 arr = [[], [], []];
 document.write(arr[0][0] = 0)
 document.write(arr[0][1] = 1)
 
 document.write(arr[0][2] = 2)
 document.write(arr[0][3] = 3)
 document.write("<br>")
 
 
 document.write(arr[1][0] = 1)
 document.write(arr[1][1] = 0)
 document.write(arr[1][2] = 1)
 document.write(arr[1][3] = 2)
 document.write("<br>")
 
 document.write(arr[2][0] = 2)
  document.write(arr[2][1] = 1)
 document.write(arr[2][2] = 0)
 document.write(arr[2][3] = 1)
 //question3
 var a;
 for (i=1;i<=10;i++){
     document.write("<br>"+i)
 }
 
 //question4
 var num=+prompt("Enter number");
 var leng=+prompt("Enter length");
 document.write("<br>" + "Multiplication table of  " + num)
 document.write("<br>" + "Length : " + leng)
 
 
 for (i=1;i<=leng;i++){
     var x=num*i;
     document.write("<br>"+num+"x"+i+"="+x)
 }
 //question5
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for (i=0;i<=4;i++){
     
     document.write("<br>"+fruits[i])
 }
 for (i=0;i<=4;i++){
     
     document.write("<br>"+"Element at index "+i+" is "+fruits[i])
 }
 
 //question6
 //a
 document.write("<br>" + "Counting : " )
 for (i=1;i<=15;i++){
    
     
     document.write("<br>"+i)
 }
 //b
 document.write("<br>" +  "Reverse Counting : " )
 for (i=10;i>=1;i--){
    
     
     document.write("<br>"+i)
 }
 
 //c
 document.write("<br>" + "Even : " )
 for (i=0;i<=20;i++){
     if(i%2==0){
     
     
     document.write("<br>"+i)}
 
 }
 
 //d
 document.write("<br>" + "Odd : " )
 for (i=0;i<=20;i++){
     if(i%2!=0){
     
     
     document.write("<br>"+i)}
 
 }
 document.write("<br>" + "Series : " )
 for (i=2;i<=20;i++){
     if(i%2==0){
     
     
     document.write("<br>"+i+"k")}
 
 }
 
 //question7
 var a = ["cake", "apple pie", "cookie", "chips", "patties"];
 var b=prompt("What do you want to order: ");
 var x=0;
 
 for (i=0;i<=5;i++){
     if (b==a[i]){
     x=1;
     
     document.write("<br>"+b+" is available at index "+i+" in our bakery")
     break;}
     
     
 
     }
      if(x==0) { document.write("<br>"+"We are sorry."+b+" is not available in our bakery")}
 
     //question8
     
     var a = [78, 53, 91, 24, 12];
     var b=a[0];
     document.write("<br>" + "Array Items : " +a)
     for (i=0;i<=4;i++){
         
 
         if (a[i]>b){
             b=a[i];}
         
         }  
         document.write("<br>"+"The largest number is "+b)
         
     
     //question9
     var a = [24, 53, 78, 91, 12];
     document.write("<br>" + "Array Items : " +a)
     var b=a[0];
     for (i=0;i<=4;i++){
         
 
         if (a[i]<b){
             b=a[i];
         
         }}
         document.write("<br>"+"The smallest number is "+b)
         
     //question10
     document.write("<br>")
     for (i=1;i<=100;i++){
             if(i%5==0){
             
             
             document.write("<br>"+i)}
         
         }












