class vehicle{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    
    }// End of constrctor

    getDetails() {
        return ("The name of the vehicle is " + this.name)
    }
}

let sedan= new vehicle('Atios', 'Toyota', '1,4');
//console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine);
console.log(sedan.getDetails())