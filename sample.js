


var list={name:"Azad",age:20,place:"Ramapuram", displ : function()
{
    console.log(this.name)
}}

console.log(list.displ())

list.azad=function(c)
{
    console.log(c)
}

console.log(list)

list.azad(100)

console.log(list)