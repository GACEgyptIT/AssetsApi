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
//    [RoutePrefix("api/Categorys")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class CategoriesController : ApiController
//    {
//        private DBContext db = new DBContext();

//        // GET: api/Categories
//        public List<CategoryVM> GetCategory()
//        {
//            return db.Category.ToList().MapToCategoryListVM();
//        }

//        // GET: api/Categories/5
//        [ResponseType(typeof(Category))]
//        public async Task<IHttpActionResult> GetCategory(int id)
//        {
//            Category category = await db.Category.FindAsync(id);
//            if (category == null)
//            {
//                return NotFound();
//            }

//            return Ok(category);
//        }

//        // PUT: api/Categories/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutCategory(int id, Category category)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != category.catId)
//            {
//                return BadRequest();
//            }

//            db.Entry(category).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!CategoryExists(id))
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

//        // POST: api/Categories
//        [ResponseType(typeof(Category))]
//        public async Task<IHttpActionResult> PostCategory(Category category)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            db.Category.Add(category);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = category.catId }, category);
//        }

//        // DELETE: api/Categories/5
//        [ResponseType(typeof(Category))]
//        public async Task<IHttpActionResult> DeleteCategory(int id)
//        {
//            Category category = await db.Category.FindAsync(id);
//            if (category == null)
//            {
//                return NotFound();
//            }

//            db.Category.Remove(category);
//            await db.SaveChangesAsync();

//            return Ok(category);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool CategoryExists(int id)
//        {
//            return db.Category.Count(e => e.catId == id) > 0;
//        }
//    }
//}