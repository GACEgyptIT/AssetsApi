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
    [RoutePrefix("api/PositionTitles")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PositionTitlesController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/PositionTitles
        public List<PositionTitleVM> GetPositionTitles()
        {
            return db.PositionTitles.ToList().MapToPositionTitleListVM();
        }

        // GET: api/PositionTitles/5
        [ResponseType(typeof(PositionTitle))]
        public async Task<IHttpActionResult> GetPositionTitle(int id)
        {
            PositionTitle positionTitle = await db.PositionTitles.FindAsync(id);
            if (positionTitle == null)
            {
                return NotFound();
            }

            return Ok(positionTitle);
        }

        // PUT: api/PositionTitles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPositionTitle(int id, PositionTitle positionTitle)
        {
            PositionTitle pos = db.PositionTitles.Where(p => p.posId == id).FirstOrDefault();
            pos.posTitle = positionTitle.posTitle;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != positionTitle.posId)
            {
                return BadRequest();
            }

            db.Entry(pos).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PositionTitleExists(id))
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

        // POST: api/PositionTitles
        [ResponseType(typeof(PositionTitle))]
        public async Task<IHttpActionResult> PostPositionTitle(PositionTitle positionTitle)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.PositionTitles.Add(positionTitle);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = positionTitle.posId }, positionTitle);
        }

        // DELETE: api/PositionTitles/5
        [ResponseType(typeof(PositionTitle))]
        public async Task<IHttpActionResult> DeletePositionTitle(int id)
        {
            PositionTitle positionTitle = await db.PositionTitles.FindAsync(id);
            if (positionTitle == null)
            {
                return NotFound();
            }

            db.PositionTitles.Remove(positionTitle);
            await db.SaveChangesAsync();

            return Ok(positionTitle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PositionTitleExists(int id)
        {
            return db.PositionTitles.Count(e => e.posId == id) > 0;
        }
    }
}