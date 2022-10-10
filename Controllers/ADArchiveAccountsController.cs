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
    [RoutePrefix("api/ADArchiveAccount")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ADArchiveAccountsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/ADArchiveAccounts
        public List<ADArchiveAccountVM> GetADArchiveAccount()
        {
            List<ADArchiveAccount> mails = new List<ADArchiveAccount>();

            mails = db.ADArchiveAccount.ToList();

            return mails.MapToADArchiveAccountVMList();
        }

        // GET: api/ADArchiveAccounts/5
        [ResponseType(typeof(ADArchiveAccount))]
        public async Task<IHttpActionResult> GetADArchiveAccount(int id)
        {
            ADArchiveAccount aDArchiveAccount = await db.ADArchiveAccount.FindAsync(id);
            if (aDArchiveAccount == null)
            {
                return NotFound();
            }

            return Ok(aDArchiveAccount);
        }

        // PUT: api/ADArchiveAccounts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutADArchiveAccount(int id, ADArchiveAccount aDArchiveAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aDArchiveAccount.ADArchiveAccountId)
            {
                return BadRequest();
            }

            db.Entry(aDArchiveAccount).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ADArchiveAccountExists(id))
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

        // POST: api/ADArchiveAccounts
        [ResponseType(typeof(ADArchiveAccount))]
        public async Task<IHttpActionResult> PostADArchiveAccount(ADArchiveAccount aDArchiveAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ADArchiveAccount.Add(aDArchiveAccount);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = aDArchiveAccount.ADArchiveAccountId }, aDArchiveAccount);
        }

        // DELETE: api/ADArchiveAccounts/5
        [ResponseType(typeof(ADArchiveAccount))]
        public async Task<IHttpActionResult> DeleteADArchiveAccount(int id)
        {
            ADArchiveAccount aDArchiveAccount = await db.ADArchiveAccount.FindAsync(id);
            if (aDArchiveAccount == null)
            {
                return NotFound();
            }

            db.ADArchiveAccount.Remove(aDArchiveAccount);
            await db.SaveChangesAsync();

            return Ok(aDArchiveAccount);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ADArchiveAccountExists(int id)
        {
            return db.ADArchiveAccount.Count(e => e.ADArchiveAccountId == id) > 0;
        }
    }
}