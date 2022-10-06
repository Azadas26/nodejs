function person(name,age,place)
{
    this.name=name
    this.age=age
    this.place=place
    this.display=function()
    {
        console.log("Name :"+this.name+"\nAge :"+this.age+"\nPlace :"+this.place)
    }
}

var azad=new person("azad",20,"ramapuram")

azad.display()

var azadas=new person("azadas",21,"pathiyoor")

azadas.display()