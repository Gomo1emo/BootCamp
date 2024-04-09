class person {
    constructor(fname){
        this.fname = fname;
    }
    toString(){
        return (`Name of this person: ${this.fname}`)
    }
}

class student extends person {
    constructor(fname, id) {
        //We introduce super keyword for calling the above class constructor
        super(fname);
        this.id = id;
    }
    toString(){
        return (`${super.toString()}
        with Student ID: ${this.id}`)
    }
}//End of inheritance

let Student1 = new student("Alice", 384924);
console.log(Student1);
console.log(Student1.toString())