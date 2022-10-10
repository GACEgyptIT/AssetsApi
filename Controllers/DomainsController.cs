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
    [RoutePrefix("api/Domains")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DomainsController : ApiController
    {
  
        private DBContext db = new DBContext();

        // GET: api/Domains
        public List<DomainVM> GetDomains()
        {
            return db.Domains.ToList().MapToDomainListVM();
        }

        // GET: api/Domains/5
        [ResponseType(typeof(Domain))]
        public async Task<IHttpActionResult> GetDomain(int id)
        {
            Domain domain = await db.Domains.FindAsync(id);
            if (domain == null)
            {
                return NotFound();
            }

            return Ok(domain);
        }

        // PUT: api/Domains/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDomain(int id, Domain domain)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != domain.domId)
            {
                return BadRequest();
            }

            db.Entry(domain).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DomainExists(id))
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

        // POST: api/Domains
        [ResponseType(typeof(Domain))]
        public async Task<IHttpActionResult> PostDomain(Domain domain)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Domains.Add(domain);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = domain.domId }, domain);
        }

        // DELETE: api/Domains/5
        [ResponseType(typeof(Domain))]
        public async Task<IHttpActionResult> DeleteDomain(int id)
        {
            Domain domain = await db.Domains.FindAsync(id);
            if (domain == null)
            {
                return NotFound();
            }

            db.Domains.Remove(domain);
            await db.SaveChangesAsync();

            return Ok(domain);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DomainExists(int id)
        {
            return db.Domains.Count(e => e.domId == id) > 0;
        }
    }
}