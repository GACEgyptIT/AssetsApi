using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using IntranetAPI.Models;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("Api/UserActivitiesLogs")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserActivitiesLogsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/UserActivitiesLogs
        public List<UserActivitiesLog> GetUserActivitiesLogs()
        {
            return db.UserActivitiesLogs.ToList();
        }

        // GET: api/UserActivitiesLogs/5
        [ResponseType(typeof(UserActivitiesLog))]
        public async Task<IHttpActionResult> GetUserActivitiesLog(int id)
        {
            UserActivitiesLog userActivitiesLog = await db.UserActivitiesLogs.FindAsync(id);
            if (userActivitiesLog == null)
            {
                return NotFound();
            }

            return Ok(userActivitiesLog);
        }

        // PUT: api/UserActivitiesLogs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserActivitiesLog(int id, UserActivitiesLog userActivitiesLog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userActivitiesLog.UserActivitiesLogId)
            {
                return BadRequest();
            }

            db.Entry(userActivitiesLog).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserActivitiesLogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("UserActivitiesLogs")]
        [HttpPost]
        public UserActivitiesLog UserActivitiesLogs(UserActivitiesLog userActivitiesLog)
        {
            if (userActivitiesLog == null)
            {
                UserActivitiesLog usrLog = new UserActivitiesLog();
                usrLog.ActionTime = DateTime.Now;
                usrLog.Action = "LoginFaild";
                db.UserActivitiesLogs.Add(usrLog);
                db.SaveChanges();

                return usrLog;
            }
            else
            {
                userActivitiesLog.ActionTime = DateTime.Now;
                db.UserActivitiesLogs.Add(userActivitiesLog);
                db.SaveChanges();

                return userActivitiesLog;
            }
        }

        // DELETE: api/UserActivitiesLogs/5
        [ResponseType(typeof(UserActivitiesLog))]
        public async Task<IHttpActionResult> DeleteUserActivitiesLog(int id)
        {
            UserActivitiesLog userActivitiesLog = await db.UserActivitiesLogs.FindAsync(id);
            if (userActivitiesLog == null)
            {
                return NotFound();
            }

            db.UserActivitiesLogs.Remove(userActivitiesLog);
            await db.SaveChangesAsync();

            return Ok(userActivitiesLog);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserActivitiesLogExists(int id)
        {
            return db.UserActivitiesLogs.Count(e => e.UserActivitiesLogId == id) > 0;
        }
    }
}