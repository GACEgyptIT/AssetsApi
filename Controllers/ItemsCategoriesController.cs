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
using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using IntranetAPI.Mappers;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/ItemsCategories")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ItemsCategoriesController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/ItemsCategories
        public List<ItemCategoryVM> GetItemsCategory()
        {
            List<ItemsCategory> itmscats = new List<ItemsCategory>();
            List<ItemCategoryVM> itmcatVMs = new List<ItemCategoryVM>();

            itmscats = db.ItemsCategory.ToList();

            if (itmscats.Count > 0)
            {
               itmcatVMs = itmscats.MapToItemCategoryListVM();
               return itmcatVMs;
            }
            return itmcatVMs;
        }

        // GET: api/ItemsCategories/5
        [ResponseType(typeof(ItemsCategory))]
        public async Task<IHttpActionResult> GetItemsCategory(int id)
        {
            ItemsCategory itemsCategory = await db.ItemsCategory.FindAsync(id);
            if (itemsCategory == null)
            {
                return NotFound();
            }

            return Ok(itemsCategory);
        }

        // PUT: api/ItemsCategories/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutItemsCategory(int id, ItemCategoryVM itemsCategoryVM)
        {
            ItemsCategory icat = itemsCategoryVM.MapToItemCategory();
            ItemsCategory ic = db.ItemsCategory.Where(p => p.icId == id).FirstOrDefault();
            
            ic.icName = icat.icName;
            ic.AuthLevel1_HD = icat.AuthLevel1_HD;
            ic.AuthLevel2_OM = icat.AuthLevel2_OM;
            ic.AuthLevel3_IT = icat.AuthLevel3_IT;
            ic.AuthLevel4_GM = icat.AuthLevel4_GM;
            ic.AuthLevel_HR = icat.AuthLevel_HR;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(ic).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemsCategoryExists(id))
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

        // POST: api/ItemsCategories
        [ResponseType(typeof(ItemCategoryVM))]
        public async Task<IHttpActionResult> PostItemsCategory(ItemCategoryVM itemsCategory)
        {
            ItemsCategory itmcat = new ItemsCategory();
            itmcat = itemsCategory.MapToItemCategory();

            db.ItemsCategory.Add(itmcat);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = itemsCategory.icId }, itemsCategory);
        }

        // DELETE: api/ItemsCategories/5
        [ResponseType(typeof(ItemsCategory))]
        public async Task<IHttpActionResult> DeleteItemsCategory(int id)
        {
            ItemsCategory itemsCategory = await db.ItemsCategory.FindAsync(id);
            if (itemsCategory == null)
            {
                return NotFound();
            }

            db.ItemsCategory.Remove(itemsCategory);
            await db.SaveChangesAsync();

            return Ok(itemsCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ItemsCategoryExists(int id)
        {
            return db.ItemsCategory.Count(e => e.icId == id) > 0;
        }
    }
}