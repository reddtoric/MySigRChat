using Microsoft.AspNetCore.SignalR;
using MySigRChat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySigRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task BroadcastMessage(object message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
