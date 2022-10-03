var read=require('readline-sync')

var s=read.question("Enter two numbers")
var s2=read.question("")

if(s>s2)
{
 console.log("First number is larger\n")
}
else if(s===s2)
{
    
 console.log("Equell\n")
}
else
{
    console.log("second number is larger\n")
   }