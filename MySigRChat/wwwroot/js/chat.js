const DEBUG = true;

function log(func, file, msg = null) {
    if (DEBUG) {
        let _msg = (msg != null) ? ": " + msg : "";

        console.log(func + " in " + file + _msg);
    }
}

class Message {
    constructor(_username, _text, _timestamp) {
        this.username = _username;
        this.text = _text;
        this.timestamp = _timestamp;
    }
}

// usernameFromView is defined in _Index.cshtml_
const inputMessage = document.getElementById('inputMessage');
const messageList = document.getElementById('messageList');
const messagesToPost = [];

function saveMessageClearInputField() {
    messagesToPost.push(inputMessage.value);

    inputMessage.value = "";
}

function sendMessageWrapper() {
    var text = messagesToPost.shift() || "";
    let timestamp = new Date().toLocaleString();

    let message = new Message(usernameFromView, text, timestamp);

    log("sendMessageWrapper", "chat.js", message.timestamp);
    log("sendMessageWrapper", "chat.js", message.text);

    sendMessageToServer(message);
}

function appendMessage(message) {
    log("appendMessage", "chat.js", message.username);
    log("appendMessage", "chat.js", message.text);
    log("appendMessage", "chat.js", message.timestamp);

    let li = document.createElement('li');
    let baseClass = "list-group-item rounded my-1 py-0 px-3";
    if (message.username == usernameFromView) {
        li.className = baseClass + " bg-primary text-right";
    }
    else {
        li.className = baseClass + " bg-light";
    }


    let timestamp = document.createElement('span');
    timestamp.innerHTML = message.timestamp;
    timestamp.className = "font-italic";

    let sender = document.createElement('span');
    sender.innerHTML = message.username;
    sender.className = "font-weight-bold";

    let text = document.createElement('p');
    text.innerHTML = message.text;
    

    li.appendChild(timestamp);
    li.appendChild(document.createTextNode("\u00A0")); // whitespace
    li.appendChild(sender);
    li.appendChild(text);

    messageList.appendChild(li);
}