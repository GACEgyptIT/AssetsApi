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
    [RoutePrefix("api/AssetTypes")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssetTypesController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/AssetTypes
        public List<AssetTypeVM> GetAssetType()
        {
            List<AssetTypeVM> types = new List<AssetTypeVM>();

            var typs = db.AssetType.ToList();
            typs.ForEach(a =>
            {
                types.Add(a.MapToAssetTypeVM());
            });
            return types;
        }

        // GET: api/AssetTypes/5
        [ResponseType(typeof(AssetType))]
        public async Task<IHttpActionResult> GetAssetType(int id)
        {
            AssetType assetType = await db.AssetType.FindAsync(id);
            if (assetType == null)
            {
                return NotFound();
            }

            return Ok(assetType);
        }

        // PUT: api/AssetTypes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAssetType(int id, AssetType assetType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != assetType.asttypId)
            {
                return BadRequest();
            }

            db.Entry(assetType).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssetTypeExists(id))
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

        // POST: api/AssetTypes
        [ResponseType(typeof(AssetType))]
        public async Task<IHttpActionResult> PostAssetType(AssetType assetType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AssetType.Add(assetType);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = assetType.asttypId }, assetType);
        }


        [HttpPost]
        [Route("DBUpdateAssetsTypes")]
        [ResponseType(typeof(List<AssetType>))]
        public async Task<IHttpActionResult> DBUpdateAssetsTypes(List<AssetType> assetType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            assetType.ForEach(t =>
            {
                var type = db.AssetType.Where(a => a.asttypName == t.asttypName).FirstOrDefault();
                if (type == null)
                {
                    db.AssetType.Add(t);
                    db.SaveChanges();
                }
      
            });

            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = assetType }, assetType);
        }



        // DELETE: api/AssetTypes/5
        [ResponseType(typeof(AssetType))]
        public async Task<IHttpActionResult> DeleteAssetType(int id)
        {
            AssetType assetType = await db.AssetType.FindAsync(id);
            if (assetType == null)
            {
                return NotFound();
            }

            db.AssetType.Remove(assetType);
            await db.SaveChangesAsync();

            return Ok(assetType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetTypeExists(int id)
        {
            return db.AssetType.Count(e => e.asttypId == id) > 0;
        }
    }
}