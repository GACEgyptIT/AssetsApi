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
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Privileges")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrivilegesController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/Privileges
        public List<PrivilegeVM> GetPrivileges()
        {      
            return db.Privileges.ToList().MapToPrivilegeListVM();
        }

        // GET: api/Privileges/5
        [ResponseType(typeof(Privilege))]
        public async Task<IHttpActionResult> GetPrivilege(int id)
        {
            Privilege privilege = await db.Privileges.FindAsync(id);
            if (privilege == null)
            {
                return NotFound();
            }

            return Ok(privilege);
        }

        // PUT: api/Privileges/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPrivilege(int id, Privilege privilege)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != privilege.PrivilegeId)
            {
                return BadRequest();
            }

            db.Entry(privilege).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrivilegeExists(id))
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

        // POST: api/Privileges
        [ResponseType(typeof(Privilege))]
        public async Task<IHttpActionResult> PostPrivilege(Privilege privilege)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Privileges.Add(privilege);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = privilege.PrivilegeId }, privilege);
        }

        [HttpPost]
        [Route("DBUpdatePrivileges")]
        [ResponseType(typeof(List<Privilege>))]
        public List<Privilege> DBUpdatePrivileges(List<Privilege> privileges)
        {
                privileges.ForEach(pr =>
                {
                    var privilage = db.Privileges.FirstOrDefault(p => p.PrivilegeName == pr.PrivilegeName);
                    if (privilage == null)
                    {
                        db.Privileges.Add(pr);
                        db.SaveChanges();
                    }
                });

            return db.Privileges.ToList();
        }

        // DELETE: api/Privileges/5
        [ResponseType(typeof(Privilege))]
        public async Task<IHttpActionResult> DeletePrivilege(int id)
        {
            Privilege privilege = await db.Privileges.FindAsync(id);
            if (privilege == null)
            {
                return NotFound();
            }

            db.Privileges.Remove(privilege);
            await db.SaveChangesAsync();

            return Ok(privilege);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PrivilegeExists(int id)
        {
            return db.Privileges.Count(e => e.PrivilegeId == id) > 0;
        }
    }
}