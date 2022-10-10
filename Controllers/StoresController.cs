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
//using System.Web.Http.Cors;
//using System.Web.Http.Description;
//using IntranetAPI.Mappers;
//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using EntityState = System.Data.Entity.EntityState;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/Store")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class StoresController : ApiController
//    {
//        private DBContext db = new DBContext();

//        // GET: api/Stores
//        public List<StoreVM> GetStores()
//        {
//            return db.Stores.ToList().MapToStoreListVM();
//        }

//        // GET: api/Stores/5
//        [ResponseType(typeof(Store))]
//        public async Task<IHttpActionResult> GetStore(int id)
//        {
//            Store store = await db.Stores.FindAsync(id);
//            if (store == null)
//            {
//                return NotFound();
//            }

//            return Ok(store);
//        }

//        // PUT: api/Stores/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutStore(int id, Store store)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != store.StoreId)
//            {
//                return BadRequest();
//            }

//            db.Entry(store).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!StoreExists(id))
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

//        // POST: api/Stores
//        [ResponseType(typeof(Store))]
//        public async Task<IHttpActionResult> PostStore(Store store)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            db.Stores.Add(store);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = store.StoreId }, store);
//        }

//        // DELETE: api/Stores/5
//        [ResponseType(typeof(Store))]
//        public async Task<IHttpActionResult> DeleteStore(int id)
//        {
//            Store store = await db.Stores.FindAsync(id);
//            if (store == null)
//            {
//                return NotFound();
//            }

//            db.Stores.Remove(store);
//            await db.SaveChangesAsync();

//            return Ok(store);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool StoreExists(int id)
//        {
//            return db.Stores.Count(e => e.StoreId == id) > 0;
//        }
//    }
//}