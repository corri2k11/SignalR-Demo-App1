using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace CalebApp1
{
    [HubName("theHub")]
    public class MyHub : Hub
    {
        [HubMethodName("announceToEverybody")]
        public void Announce(string message)
        {
            //Broadcast to all connected clients, everybody
            Clients.All.Announce(message);
        }

        //One way of doing this method...
        //public void GetServerDateTime()
        //{
        //    //Broadcast to only the client who sent the request
        //    Clients.Caller.DisplayDateTime();
        //}

        //Another way of doing the same, using a return type...

        public DateTime GetServerDateTime()  //Pascal casing
        {
            return DateTime.Now;
        }
    }
}