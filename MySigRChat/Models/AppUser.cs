using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace MySigRChat.Models
{
    public class AppUser : IdentityUser
    {
        public virtual ICollection<Message> Messages { get; set; }

        public AppUser()
        {
            Messages = new HashSet<Message>();
        }
    }
}
