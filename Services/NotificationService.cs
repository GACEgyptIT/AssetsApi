using IntranetAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Services
{
    public class NotificationService
    {

        private DBContext db = new DBContext();

        public Notification AddNotification(Notification notfi)
        {
            //Notification nt = new Notification();
            //nt.Description = description;
            //nt.seen = false;
            
            db.Notifications.Add(notfi);
            db.SaveChanges();

            return notfi;
        }
    }
}