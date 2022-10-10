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
    [RoutePrefix("api/Branchs")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BranchsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/Branches
        public List<BranchVM> GetBranch()
        {
            List<BranchVM> brnVM = new List<BranchVM>();
            List<Branch> brns = new List<Branch>();
            brns = db.Branch.ToList();
            brnVM = brns.MapToBranchListVM();
            return brnVM;
        }

        // GET: api/Branches/5
        [ResponseType(typeof(Branch))]
        public async Task<IHttpActionResult> GetBranch(int id)
        {
            Branch branch = await db.Branch.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        // PUT: api/Branches/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBranch(int id, Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != branch.brnId)
            {
                return BadRequest();
            }

            db.Entry(branch).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
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

        // POST: api/Branches
        [ResponseType(typeof(Branch))]
        public async Task<IHttpActionResult> PostBranch(Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Branch.Add(branch);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = branch.brnId }, branch);
        }

        // DELETE: api/Branches/5
        [ResponseType(typeof(Branch))]
        public async Task<IHttpActionResult> DeleteBranch(int id)
        {
            Branch branch = await db.Branch.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            db.Branch.Remove(branch);
            await db.SaveChangesAsync();

            return Ok(branch);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BranchExists(int id)
        {
            return db.Branch.Count(e => e.brnId == id) > 0;
        }
    }
}