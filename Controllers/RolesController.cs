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
using Microsoft.Ajax.Utilities;
using System.Data.Entity;
using IntranetAPI.ViewModels;
using IntranetAPI.Mappers;
using System.Data.Entity.Migrations;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Roles")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RolesController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/Roles
        public List<RoleVM> GetRoles()
        {
            List<RoleVM> rlVMs = new List<RoleVM>();
            List<Role> rls = new List<Role>();

            rls = db.Roles.ToList();
            rlVMs = rls.MapToRoleListVM();

            return rlVMs;
        }

        // GET: api/Roles/5
        [ResponseType(typeof(Role))]
        public async Task<IHttpActionResult> GetRole(int id)
        {
            Role role = await db.Roles.FindAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            return Ok(role);
        }

        // PUT: api/Roles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRole(int id, Role role)
        {
            var rl = db.Roles.FirstOrDefault(x => x.roleId == role.roleId);
            if(rl.RolePrivileges != null)
            {
                db.RolePrivileges.RemoveRange(rl.RolePrivileges);
                db.SaveChanges();
            }
            db.Entry(rl).State = EntityState.Detached;
            rl.roleName = role.roleName;
            db.Roles.Attach(rl);
            db.Entry(rl).State = EntityState.Modified;
            db.SaveChanges();
            db.RolePrivileges.AddRange(role.RolePrivileges);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Roles
        [ResponseType(typeof(Role))]
        public async Task<IHttpActionResult> PostRole(Role role)
        {

            var myRole = db.Roles.Where(x => x.roleName == role.roleName).FirstOrDefault();
            if(myRole == null)
            {
                db.Roles.Add(role);
                db.SaveChanges();
            } else
            {
                var attachedEntity = db.Roles.Find(role.roleId);
                //db.RolePrivileges.RemoveRange(db.RolePrivileges.Where(r => r.RoleId == role.roleId).ToList());
                //db.SaveChanges();

                db.Entry(attachedEntity).State = EntityState.Detached;

                if (attachedEntity != null && db.Entry(attachedEntity).State != EntityState.Detached)   //Framwaork EntityState needs refrance (using System.Data.Entity;)
                {
                    db.Entry(attachedEntity).State = EntityState.Detached;  //Detach the OLD Employee
                    db.Roles.Add(role);             //Attach the NEW Departmnet
                    db.Entry(role).State = EntityState.Modified;
                    db.SaveChanges();
                }
            } 

            //if (role.RolePrivileges.Count > 0)
            //{
            //    role.RolePrivileges.ForEach(r => {

            //        var rl = db.RolePrivileges.Where(x => x.RoleId == role.roleId).FirstOrDefault();
            //        if (rl != null)
            //        {
            //            rl.PrivilegeId = r.PrivilegeId;
            //        }
            //        else
            //        {
            //            RolePrivilege roleprivilege = new RolePrivilege();

            //            db.Roles.Add(role);
            //            db.SaveChangesAsync();

            //           // db.RolePrivileges.add



            //        }
            //    });
            //}


            //var rl = db.RolePrivileges.Where(x => x.RoleId == role.roleId).sel ;

            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = role.roleId }, role);
        }

        // DELETE: api/Roles/5
        [ResponseType(typeof(Role))]
        public async Task<IHttpActionResult> DeleteRole(int id)
        {
            Role role = await db.Roles.FindAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            db.Roles.Remove(role);
            await db.SaveChangesAsync();

            return Ok(role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoleExists(int id)
        {
            return db.Roles.Count(e => e.roleId == id) > 0;
        }
    }
}