let greetings = "wlecome to FS";
let times = 4;

//Block Scope
if(times<5) {
   let greetings = "Hi there instead"
}
//End of Block Scope

console.log(greetings);