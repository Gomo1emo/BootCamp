let userName = "Alice"
let message = "Welcome ";
let text;
let from;

function sendMsg () {
    let message = "Welcome " + userName;
    console.log(message);
}
sendMsg(); //Always call / initialise the variable in oder to get return value

function showMessage() {
    userName = "Bob";
    console.log(message + userName)
}
showMessage()
console.log(message, userName);

function sendMsg(from, text) {
    from = "Anonymous";
    text = "Welcome to my online learnership";
    return from + text
}

console.log(sendMsg());