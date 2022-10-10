//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.Entity;
//using System.Data.Entity.Infrastructure;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Threading.Tasks;
//using System.Web.Http;
//using System.Web.Http.Description;
//using IntranetAPI.Models;

//namespace IntranetAPI.Controllers
//{
//    public class AssetTypes2Controller : ApiController
//    {
//        private DBContext db = new DBContext();

//        // GET: api/AssetTypes2
//        public IQueryable<AssetType> GetAssetType()
//        {
//            return db.AssetType;
//        }

//        // GET: api/AssetTypes2/5
//        [ResponseType(typeof(AssetType))]
//        public async Task<IHttpActionResult> GetAssetType(int id)
//        {
//            AssetType assetType = await db.AssetType.FindAsync(id);
//            if (assetType == null)
//            {
//                return NotFound();
//            }

//            return Ok(assetType);
//        }

//        // PUT: api/AssetTypes2/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutAssetType(int id, AssetType assetType)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != assetType.asttypId)
//            {
//                return BadRequest();
//            }

//            db.Entry(assetType).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!AssetTypeExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return StatusCode(HttpStatusCode.NoContent);
//        }

//        // POST: api/AssetTypes2
//        [ResponseType(typeof(AssetType))]
//        public async Task<IHttpActionResult> PostAssetType(AssetType assetType)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            db.AssetType.Add(assetType);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = assetType.asttypId }, assetType);
//        }

//        // DELETE: api/AssetTypes2/5
//        [ResponseType(typeof(AssetType))]
//        public async Task<IHttpActionResult> DeleteAssetType(int id)
//        {
//            AssetType assetType = await db.AssetType.FindAsync(id);
//            if (assetType == null)
//            {
//                return NotFound();
//            }

//            db.AssetType.Remove(assetType);
//            await db.SaveChangesAsync();

//            return Ok(assetType);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool AssetTypeExists(int id)
//        {
//            return db.AssetType.Count(e => e.asttypId == id) > 0;
//        }
//    }
//}