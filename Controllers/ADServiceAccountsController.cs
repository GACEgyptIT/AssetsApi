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
    [RoutePrefix("api/ADServiceAccount")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ADServiceAccountsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/ADServiceAccounts
        public List<ADServiceAccountVM> GetADServiceAccount()
        {
            List<ADServiceAccountVM> adSrvs = new List<ADServiceAccountVM>();
            adSrvs = db.ADServiceAccount.ToList().MapToADServiceAccountVMList();

            return adSrvs;   
        }

        // GET: api/ADServiceAccounts/5
        [ResponseType(typeof(ADServiceAccount))]
        public async Task<IHttpActionResult> GetADServiceAccount(int id)
        {
            ADServiceAccount aDServiceAccount = await db.ADServiceAccount.FindAsync(id);
            if (aDServiceAccount == null)
            {
                return NotFound();
            }

            return Ok(aDServiceAccount);
        }

        // PUT: api/ADServiceAccounts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutADServiceAccount(int id, ADServiceAccount aDServiceAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aDServiceAccount.ADServiceAccountId)
            {
                return BadRequest();
            }

            db.Entry(aDServiceAccount).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ADServiceAccountExists(id))
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

        // POST: api/ADServiceAccounts
        [ResponseType(typeof(ADServiceAccount))]
        public async Task<IHttpActionResult> PostADServiceAccount(ADServiceAccount aDServiceAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ADServiceAccount.Add(aDServiceAccount);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aDServiceAccount.ADServiceAccountId }, aDServiceAccount);
        }

        // DELETE: api/ADServiceAccounts/5
        [ResponseType(typeof(ADServiceAccount))]
        public async Task<IHttpActionResult> DeleteADServiceAccount(int id)
        {
            ADServiceAccount aDServiceAccount = await db.ADServiceAccount.FindAsync(id);
            if (aDServiceAccount == null)
            {
                return NotFound();
            }

            db.ADServiceAccount.Remove(aDServiceAccount);
            await db.SaveChangesAsync();

            return Ok(aDServiceAccount);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ADServiceAccountExists(int id)
        {
            return db.ADServiceAccount.Count(e => e.ADServiceAccountId == id) > 0;
        }
    }
}