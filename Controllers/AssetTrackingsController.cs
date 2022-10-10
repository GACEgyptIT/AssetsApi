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
using IntranetAPI.Services;
using IntranetAPI.ViewModels;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/AssetTrackingss")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssetTrackingsController : ApiController
    {
        private DBContext db = new DBContext();
        AssetService astSrv = new AssetService();

        // GET: api/AssetTrackings
        public List<AssetTrackingVM> GetAssetTracking()
        {
            List<AssetTrackingVM> astTracks = new List<AssetTrackingVM>();

            astTracks = db.AssetTracking.ToList().MapToAssetTrackingVMList();

            return astTracks;
        }

        [HttpGet]
        [Route("getLogsByAssetCode/{astcode}")]
        public List<AssetTrackingVM> getLogsByAssetCode(string astcode)
        {
            List<AssetTracking> assetTrackings = new List<AssetTracking>();

            assetTrackings = db.AssetTracking.Where(a=>a.astCode == astcode.Trim()).ToList();
            if (assetTrackings != null && assetTrackings.Count > 0)
            {
                return assetTrackings.MapToAssetTrackingVMList();
            }
            else
            {
                return null;
            }
        }

        // PUT: api/AssetTrackings/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAssetTracking(int id, AssetTracking assetTracking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != assetTracking.AssetTrackingId)
            {
                return BadRequest();
            }

            db.Entry(assetTracking).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssetTrackingExists(id))
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

        // POST: api/AssetTrackings
        [ResponseType(typeof(AssetTracking))]
        public async Task<IHttpActionResult> PostAssetTracking(AssetTracking assetTracking)
        {
            //assetTracking.DateTime = DateTime.Now;

            //db.AssetTracking.Add(assetTracking);
            //await db.SaveChangesAsync();

            AssetTracking record = astSrv.CreateAssetTrackingRecord(assetTracking.astCode, assetTracking.From, assetTracking.To, assetTracking.empHRCode);

            return CreatedAtRoute("DefaultApi", new { id = assetTracking.AssetTrackingId }, record);
        }

        // DELETE: api/AssetTrackings/5
        [ResponseType(typeof(AssetTracking))]
        public async Task<IHttpActionResult> DeleteAssetTracking(int id)
        {
            AssetTracking assetTracking = await db.AssetTracking.FindAsync(id);
            if (assetTracking == null)
            {
                return NotFound();
            }

            db.AssetTracking.Remove(assetTracking);
            await db.SaveChangesAsync();

            return Ok(assetTracking);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetTrackingExists(int id)
        {
            return db.AssetTracking.Count(e => e.AssetTrackingId == id) > 0;
        }

    }
}