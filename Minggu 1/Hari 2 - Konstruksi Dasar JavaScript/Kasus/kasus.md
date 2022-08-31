1. Write a JavaScript program that accept two integers and display the larger

function integer(a,b) {

  if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a );
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } else {
     document.write("Please add an integer!");

  }
}

console.log(integer(5,5));

2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function compares(a,b,c){
    if (a>0 && b>0 && c>0)
        {
       alert("The sign is +");
        }
    else if (a<0 && b<0 && c<0)
        {
          console.log("The sign is -");
        }
        else if (a>0 && b<0 && c<0)
        {
          console.log("The sign is +");
        }
        else if (a<0 && b>0 && c<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
}

console.log(compares(3,-7,2));

3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function sortd(x,y,z){

    if (x>y && x>z)
    {
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }}
    else if (y>x && y >z)
    {
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }}
    else if (z>x && z>y)
    {
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }}  
}
console.log(sortd(0,-1,4));

4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

function sortfive(a,b,c,d,e){

    if (a>b && a>c && a>d && a>e)
    {
    console.log(a);
    }
    else if (b>a && b>c && b>d && b>e)
    {
    console.log(b);
    }
    else if (c>a && c>b && c>d && c>e)
    {
    console.log(c);
    }
    else if (d>a && d>c && d>b && d>e)
    {   
    console.log(d);
    }
    else
    {
    console.log(e);
    }
}
console.log(sortfive(-5,-2,-6,0,-1));

5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}

6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let Avgmarks = 0;

for (let i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

8. According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.

function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+f5);

9. Write a JavaScript program to find the armstrong numbers of 3 digits.

function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();

10. Write a JavaScript program to construct the following pattern, using a nested for loop.

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. 

var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
    if (a>b)
    {
        a = a -b;
    }
    else
    {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

12.  Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);