class person {
    constructor (name, id) {
        this.name = name;
        this.id = id;
    }

    addAddress(address){
        this.address = address;
    }

    getDetails(){
        console.log(`Name of a person is ${this.name},
        residing at ${this.address}`)
    }

}
let person1 = new person('Mingas', 10);
person1.addAddress('Garankuwa')

//Abstraction
person1.getDetails();