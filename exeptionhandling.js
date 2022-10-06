
function azad(a,b)
{
    if(b==0)
    {
        throw "Devisible by zero is not possible"
    }

    return (a/b) 
}


try
{
   
    console.log(azad(10,2))

}
catch (e)
{
   console.log("!!!!!!!!!!!!  "+e)
}
finally
{
    console.log("\nProgram exicute sucessfully")
}
