function talk () {
    var know = {
        "Hello" : "Hi there &#128540",
        "Who are you?": "My name is Skroef",
        "How are you": " I am good :-)",
        "What can I do for you?": "Give us a follow and a like",
        "Your followers?": "I have 1000 likes, no followers yet",
        "Okay": "thanks for the convo",
        "Bye": "Okay we will meet soon, was nice chatting with you"
    }

    var user = document.getElementById('userBox').value;
    document.getElementById('chatlog').innerHTML = user + "<br>";

    if(user in know) {
        document.getElementById('chatlog').innerHTML = know[user] + "<br>"   
    }else{
        document.getElementById('chatlog').innerHTML = "Sorry I didn't understand <br>"
    }
}