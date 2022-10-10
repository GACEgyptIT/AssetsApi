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
    [RoutePrefix("api/Supliers")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SuppliersController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/Suppliers
        public List<SupplierVM> GetSupplier()
        {
            return db.Supplier.ToList().MapToAssetListVM();
        }

        // GET: api/Suppliers/5
        [ResponseType(typeof(Supplier))]
        public async Task<IHttpActionResult> GetSupplier(int id)
        {
            Supplier supplier = await db.Supplier.FindAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            return Ok(supplier);
        }

        // PUT: api/Suppliers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSupplier(int id, Supplier supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplier.splId)
            {
                return BadRequest();
            }

            db.Entry(supplier).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierExists(id))
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

        // POST: api/Suppliers
        [ResponseType(typeof(Supplier))]
        public async Task<IHttpActionResult> PostSupplier(Supplier supplier)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Supplier.Add(supplier);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = supplier.splId }, supplier);
        }

        // DELETE: api/Suppliers/5
        [ResponseType(typeof(Supplier))]
        public async Task<IHttpActionResult> DeleteSupplier(int id)
        {
            Supplier supplier = await db.Supplier.FindAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            db.Supplier.Remove(supplier);
            await db.SaveChangesAsync();

            return Ok(supplier);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SupplierExists(int id)
        {
            return db.Supplier.Count(e => e.splId == id) > 0;
        }
    }
}