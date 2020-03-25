using Microsoft.AspNetCore.SignalR;
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
