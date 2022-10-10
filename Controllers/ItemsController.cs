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
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using EntityState = System.Data.Entity.EntityState;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/Items")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class ItemsController : ApiController
//    {
//        private DBContext db = new DBContext();

//        ItemService itmSrv = new ItemService();

//        // GET: api/Items
//        public List<ItemVM> GetItem()
//        {
//            List<Item> items = db.Item.ToList();
//            List <ItemVM> itemvms = items.MapToItemVMList();
//            return itemvms;
//        }

//        [HttpGet]
//        [Route("getItemById/{id}")]
//        public ItemVM getItemById(int id)
//        {
//            Item item = db.Item.Where(i => i.itmId == id).FirstOrDefault();

//            return item.MapToItemVM();
//        }

//        [HttpPost]
//        [Route("getSOHItem")]
//        public SOH getSOHItem(SOH sohSearch)
//        {
//            return itmSrv.getSOHItem(sohSearch);
//        }

//        [HttpPost]
//        [Route("getConsumptionItem")]
//        public SOH getConsumptionItem(SOH sohSearch)
//        {
//            SOH soh = itmSrv.getConsumptionItem(sohSearch);
//            return soh;
//        }


//        [ResponseType(typeof(Item))]
//        public async Task<IHttpActionResult> GetItem(int id)
//        {
//            Item item = await db.Item.FindAsync(id);
//            if (item == null)
//            {
//                return NotFound();
//            }

//            return Ok(item);
//        }

//        // PUT: api/Items/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutItem(int id, Item item)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != item.itmId)
//            {
//                return BadRequest();
//            }

//            db.Entry(item).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!ItemExists(id))
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

//        // POST: api/Items
//        [ResponseType(typeof(Item))]
//        public async Task<IHttpActionResult> PostItem(Item item)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            db.Item.Add(item);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = item.itmId }, item);
//        }

//        // DELETE: api/Items/5
//        [ResponseType(typeof(Item))]
//        public async Task<IHttpActionResult> DeleteItem(int id)
//        {
//            Item item = await db.Item.FindAsync(id);
//            if (item == null)
//            {
//                return NotFound();
//            }

//            db.Item.Remove(item);
//            await db.SaveChangesAsync();

//            return Ok(item);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool ItemExists(int id)
//        {
//            return db.Item.Count(e => e.itmId == id) > 0;
//        }
//    }
//}