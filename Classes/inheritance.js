function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    //Can't be called outside this function because "let" makes it private.
    let getDetails_noAccess = function(){
        return (`First name is ${firstname} and last name is ${lastname}`)
    }

    //Can be called outside the function
    this.getDetails_Access = function(){
        return (`First name is ${firstname} and last name is ${lastname}`)
    }
}//End of Fx
let person1 = new person("Alice","Mazibuko");
console.log(person1.firstname);
console.log(person1.getDetails_noAccess);
console.log(person1.getDetails_Access());
