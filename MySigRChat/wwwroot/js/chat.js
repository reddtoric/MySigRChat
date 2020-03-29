﻿
function log(func, file, msg = null) {
    let _msg = (msg != null) ? ": " + msg : "";

    console.debug(func + " in " + file + _msg);
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
let currentUser = "";

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

    if (currentUser == "") {
        currentUser = messageList.lastElementChild.getAttribute("username");
    }

    let li = document.createElement('li');
    let builtClass = messageBaseClass;
    builtClass += ((message.username == usernameFromView) ? messageSenderClass : messageOtherSenderClass);
    builtClass += ((message.username != currentUser) ? messageDiffUserClass : "");


    if (currentUser != message.username) {
        currentUser = message.username;
    }

    li.className = builtClass;


    let timestamp = document.createElement('span');
    timestamp.innerHTML = message.timestamp;
    timestamp.className = timestampClass;

    let sender = document.createElement('span');
    sender.innerHTML = message.username;
    sender.className = userClass;

    let text = document.createElement('p');
    text.innerHTML = message.text;
    text.className = messageTextClass;
    

    li.appendChild(timestamp);
    li.appendChild(document.createTextNode("\u00A0")); // whitespace
    li.appendChild(sender);
    li.appendChild(text);

    messageList.appendChild(li);
}