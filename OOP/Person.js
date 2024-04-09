const Person = {

    //Data property
    //Key        Value
    firstName: "Alice",

//Accessor property (getter)
get getName() {
    return this.firstName;
}
,
//Set method
set changeName(newName) { //A parameter for re-assigning or mapping new values
    this.firstName = newName;
}
}
//End of get metthod

console.log(Person); //This is just an object
console.log(Person.firstName); //This is called accessing data property
console.log(Person.getName); //This is called accessing using getter method
//console.log(Person.getName()); 

Person.changeName = "Alison";
console.log(Person.firstName);
