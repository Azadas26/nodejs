var per=require('readline-sync')
var list={
    name:"Azad",
    age:20,
    place:"Ramapuram",
    display:function()
    {
        
        var a=per.question("Enter Your Two numbers")
        var b=per.question("")
        var c=a+b;
        return a+b

    }
}


list.dateodbirth="23/11/2001"


list.are=function(a,b)
{
    console.log(a+"     "+b)
}


for(x in list)
{
    console.log(x+" : "+list[x])
}

list.are(10,20)

