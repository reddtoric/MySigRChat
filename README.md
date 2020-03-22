# SignalR Chat app

Followed along a video, the chat app didn't work at all and had many bugs. 
After spending some time debugging, making small changes and seeing what happens,
and looking at stackoverflow and MvcMovie project, I finally got a basic working chat app.

Note to self: 
1. user click submit
2. saveMessageClearInputField()
3. if success: sendMessageWrapper()
4. sendMessageToServer()
5. BroadcastMessage()
6. appendMessage()
7. msg appears on chat