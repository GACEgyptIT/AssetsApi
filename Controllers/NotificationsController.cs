using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using IntranetAPI.Models;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Notifications")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class NotificationsController : ApiController
    {

        DBContext db = new DBContext();

        [HttpGet]
        [Route("GetNotificationsByEmpId/{empId}")]
        public List<Notification> GetNotificationsByEmpId(int empId)
        {
            List<Notification> nots = new List<Notification>();
            nots = db.Notifications.Where(n=>n.seen == false).ToList();

            if (nots != null)
            {
                return nots;
            }
            return nots;
        }

        [HttpGet]
        [Route("UpdateNotificationsById/{ntId}")]
        public Notification UpdateNotificationsById(int ntId)
        {
            Notification nt = new Notification();
            nt = db.Notifications.Where(n => n.NotificationId == ntId).FirstOrDefault();
            db.Entry(nt).State = EntityState.Detached;
            nt.seen = true;

            db.Notifications.Add(nt);       
            db.Entry(nt).State = EntityState.Modified;
            db.SaveChanges();

            return nt;
        }
    }
}
