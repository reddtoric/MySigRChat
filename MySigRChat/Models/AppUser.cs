using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
